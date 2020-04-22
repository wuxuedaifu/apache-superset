/* global window */
import React from 'react';
import PropTypes from 'prop-types';

import getChartIdsFromLayout from '../util/getChartIdsFromLayout';
import DashboardBuilder from '../containers/DashboardBuilder';
import {
  chartPropShape,
  slicePropShape,
  dashboardInfoPropShape,
  dashboardStatePropShape,
  loadStatsPropShape,
} from '../util/propShapes';
import { areObjectsEqual } from '../../reduxUtils';
import getFormDataWithExtraFilters from '../util/charts/getFormDataWithExtraFilters';
import {
  Logger,
  ActionLog,
  DASHBOARD_EVENT_NAMES,
  LOG_ACTIONS_MOUNT_DASHBOARD,
  LOG_ACTIONS_LOAD_DASHBOARD_PANE,
  LOG_ACTIONS_FIRST_DASHBOARD_LOAD,
} from '../../logger';

import { t } from '../../locales';

import '../stylesheets/index.less';

const propTypes = {
  actions: PropTypes.shape({
    addSliceToDashboard: PropTypes.func.isRequired,
    removeSliceFromDashboard: PropTypes.func.isRequired,
    runQuery: PropTypes.func.isRequired,
  }).isRequired,
  dashboardInfo: dashboardInfoPropShape.isRequired,
  dashboardState: dashboardStatePropShape.isRequired,
  charts: PropTypes.objectOf(chartPropShape).isRequired,
  slices: PropTypes.objectOf(slicePropShape).isRequired,
  datasources: PropTypes.object.isRequired,
  loadStats: loadStatsPropShape.isRequired,
  layout: PropTypes.object.isRequired,
  impressionId: PropTypes.string.isRequired,
  initMessages: PropTypes.array,
  timeout: PropTypes.number,
  userId: PropTypes.string,
};

const defaultProps = {
  initMessages: [],
  timeout: 60,
  userId: '',
};

class Dashboard extends React.PureComponent {
  // eslint-disable-next-line react/sort-comp
  static onBeforeUnload(hasChanged) {
    if (hasChanged) {
      window.addEventListener('beforeunload', Dashboard.unload);
    } else {
      window.removeEventListener('beforeunload', Dashboard.unload);
    }
  }

  static unload() {
    const message = t('You have unsaved changes.');
    window.event.returnValue = message; // Gecko + IE
    return message; // Gecko + Webkit, Safari, Chrome etc.
  }

  constructor(props) {
    super(props);
    this.isFirstLoad = true;
    this.actionLog = new ActionLog({
      impressionId: props.impressionId,
      source: 'dashboard',
      sourceId: props.dashboardInfo.id,
      eventNames: DASHBOARD_EVENT_NAMES,
    });
    Logger.start(this.actionLog);
    this.initTs = new Date().getTime();
  }

  componentDidMount() {
    Logger.append(LOG_ACTIONS_MOUNT_DASHBOARD);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.dashboardState.editMode) {
      // log pane loads
      const loadedPaneIds = [];
      let minQueryStartTime = Infinity;
      const allVisiblePanesDidLoad = Object.entries(nextProps.loadStats).every(
        ([paneId, stats]) => {
          const {
            didLoad,
            minQueryStartTime: paneMinQueryStart,
            ...restStats
          } = stats;
          if (
            didLoad &&
            this.props.loadStats[paneId] &&
            !this.props.loadStats[paneId].didLoad
          ) {
            Logger.append(LOG_ACTIONS_LOAD_DASHBOARD_PANE, {
              ...restStats,
              duration: new Date().getTime() - paneMinQueryStart,
              version: 'v2',
            });

            if (!this.isFirstLoad) {
              Logger.send(this.actionLog);
            }
          }
          if (this.isFirstLoad && didLoad && stats.slice_ids.length > 0) {
            loadedPaneIds.push(paneId);
            minQueryStartTime = Math.min(minQueryStartTime, paneMinQueryStart);
          }

          // return true if it is loaded, or it's index is not 0
          return didLoad || stats.index !== 0;
        },
      );

      if (allVisiblePanesDidLoad && this.isFirstLoad) {
        Logger.append(LOG_ACTIONS_FIRST_DASHBOARD_LOAD, {
          pane_ids: loadedPaneIds,
          duration: new Date().getTime() - minQueryStartTime,
          version: 'v2',
        });
        Logger.send(this.actionLog);
        this.isFirstLoad = false;
      }
    }

    const currentChartIds = getChartIdsFromLayout(this.props.layout);
    const nextChartIds = getChartIdsFromLayout(nextProps.layout);

    if (currentChartIds.length < nextChartIds.length) {
      const newChartIds = nextChartIds.filter(
        key => currentChartIds.indexOf(key) === -1,
      );
      newChartIds.forEach(newChartId =>
        this.props.actions.addSliceToDashboard(newChartId),
      );
    } else if (currentChartIds.length > nextChartIds.length) {
      // remove chart
      const removedChartIds = currentChartIds.filter(
        key => nextChartIds.indexOf(key) === -1,
      );
      removedChartIds.forEach(removedChartId =>
        this.props.actions.removeSliceFromDashboard(removedChartId),
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { refresh, filters, hasUnsavedChanges } = this.props.dashboardState;
    if (refresh) {
      // refresh charts if a filter was removed, added, or changed
      let changedFilterKey = null;
      const currFilterKeys = Object.keys(filters);
      const prevFilterKeys = Object.keys(prevProps.dashboardState.filters);

      currFilterKeys.forEach(key => {
        const prevFilter = prevProps.dashboardState.filters[key];
        if (
          // filter was added or changed
          typeof prevFilter === 'undefined' ||
          !areObjectsEqual(prevFilter, filters[key])
        ) {
          changedFilterKey = key;
        }
      });

      if (
        !!changedFilterKey ||
        currFilterKeys.length !== prevFilterKeys.length
      ) {
        this.refreshExcept(changedFilterKey);
      }
    }

    if (hasUnsavedChanges) {
      Dashboard.onBeforeUnload(true);
    } else {
      Dashboard.onBeforeUnload(false);
    }
  }

  // return charts in array
  getAllCharts() {
    return Object.values(this.props.charts);
  }

  // return charts in array
  getTabCharts() {
    return Object.values(this.props.charts);
  }


  refreshExcept(filterKey) {
    const immune = this.props.dashboardInfo.metadata.filter_immune_slices || [];
    //console.log(this.props);



    //DF 获取tab页信息（最小粒度，只能包含chart，row，column，不能是嵌套tab的上级tab）
    var TabArrayObj = new Array();
    Object.keys(this.props.layout).forEach((key) => {
        if (key.search('TAB-') != -1 &&
        this.props.layout[key].children.toString().indexOf("TAB-") == -1 &&
        this.props.layout[key].children.toString().indexOf("TABS-") == -1 ) {
            TabArrayObj.push(key);
        };
    });
    //console.log(TabArrayObj);
    //二叉树遍历，获取dashabord图的层级结构
    function layoutTreeLoop(node) {
        var tmp = new Array()
        if(node.children.length != 0 && node.id.indexOf("CHART") == -1){
            for(var j=0, len = node.children.length; j <len;j++){
              var arr = this.props.layout[node.children[j]];
              tmp.push(layoutTreeLoop.call(this,arr));
            }
        }
        else{
          if( node.id.indexOf("COLUMN-") == -1 && node.id.indexOf("ROW-") == -1){
            tmp.push(node);
          };
        };
        return tmp;
    }
    //二叉树遍历，获取dashabord图的层级结构（图id)
    function layoutTreeLoopId(node) {
        var tmp = new Array()
        if(node.children.length != 0 && node.id.indexOf("CHART") == -1){
            for(var j=0, len = node.children.length; j <len;j++){
              var arr = this.props.layout[node.children[j]];
              tmp.push(layoutTreeLoop.call(this,arr));
            }
        }
        else{
          if( node.id.indexOf("COLUMN-") == -1 && node.id.indexOf("ROW-") == -1){
            tmp.push(node.meta.chartId);
          };
        };
        return tmp;
    }




    const finalSlicesArrayObj = new Array();
    const finalSlicesIdArray = new Array();
    for (var i=0,len=TabArrayObj.length; i<len; i++) {

      var tabList = layoutTreeLoop.call(this, this.props.layout[TabArrayObj[i]]);
      var tabSlicesIdList = layoutTreeLoopId.call(this, this.props.layout[TabArrayObj[i]]);

      finalSlicesArrayObj.push(tabList.flat(Infinity));
      finalSlicesIdArray.push(tabList.flat(Infinity));
      };


    //console.log(finalSlicesIdArray);
    //console.log(Object.keys(this.props.dashboardState.filters));
    this.props.layout['finalSlicesArrayObj'] = finalSlicesArrayObj;
    this.props.layout['finalSlicesIdArray'] = finalSlicesIdArray;

    var allCharts = this.getAllCharts();

    //获取筛选器所在tab页内的所有图表
    function getallChartsInTab(filterKey){
      var chartidlist = []
      var tmp = {}
      var filterarray = new Array;
      if(typeof filterKey == 'string'){
        filterarray.push(filterKey);
      }
      outerloop:
      for(var i = 0, len = filterarray.length; i < len; i++){
        innerloop:
        for (var j = 0, len1 = this.props.layout.finalSlicesIdArray.length; j < len1; j++) {
          for(var k = 0, len2 = this.props.layout.finalSlicesIdArray[j].length; k < len2; k++){
            //console.log(this.props.layout.finalSlicesIdArray[j][k].meta.chartId)
            if(this.props.layout.finalSlicesIdArray[j][k].meta.chartId == parseInt(filterarray[i])){
              chartidlist.push(this.props.layout.finalSlicesIdArray[j]);
              break innerloop;
            }
          }
        }
      }
      var chartidlistFlat = chartidlist.flat(Infinity);
      var allChartsInTab = new Array;

      for(var m = 0, len3 = chartidlistFlat.length; m < len3; m++){
        allChartsInTab.push(this.props.charts[chartidlistFlat[m].meta.chartId]);

      }

      return allChartsInTab;
    }

    var allChartsInTab = getallChartsInTab.call(this, filterKey)

    //操作时间筛选器时，只更新筛选器所在tab页内的图表数据
    allChartsInTab.forEach(chart => {
      // filterKey is a string, immune array contains numbers
      //console.log(this.props.dashboardInfo.metadata);
      //console.log(this);
      //this.props.layout = str.search("2")

      // var TabarrayObj = new Array();
      // Object.keys(this.props.layout).forEach((key) => {
      //   //var keyname = this.props.layout[key];
      //   if (key.search('TAB-') != -1) {
      //     var TabChildList = this.props.layout[key].children
      //     if (columnChildList.indexOf(key) != function = -1) {
      //       TabarrayObj.concat(this.props.layout[key].children);
      //       var
      //
      //           form_data[key] = explore.rawFormData[key];
      //     }
      //   }
      // });

      var allPannelFilters = this.props.dashboardState.filters;
      var allPannelFiltersId = Object.keys(this.props.dashboardState.filters);
      //console.log(allPannelFilters);

          //获取filterkey所代表的filter信息，一个图只会被所在tab页内的筛选器所更新，跟其他tab页内的无关。
      function returnFinalFilter(chartId) {
        for (var i = 0, len = this.props.layout.finalSlicesIdArray.length; i < len; i++) {
          for(var j = 0, len2 = this.props.layout.finalSlicesIdArray[i].length; j < len2; j++) {
            //console.log(typeof this.props.layout.finalSlicesIdArray[i][j].meta.chartId)
            //console.log(typeof chartId)
            //console.log(i, j);
            if (this.props.layout.finalSlicesIdArray[i][j].meta.chartId == chartId){
              var slicesidList = new Array;
              for(var k = 0, len3 = this.props.layout.finalSlicesIdArray[i].length; k < len3; k++){
                slicesidList.push(this.props.layout.finalSlicesIdArray[i][k].meta.chartId.toString());
              }

              var filterId = slicesidList.filter(function(v){ return allPannelFiltersId.indexOf(v) > -1 });
              //console.log(this.props.layout.finalSlicesIdArray[i][j].meta.chartId, chartId);
              //console.log(filterId);
              var filterResult = {};
              for(var k = 0, len3 = filterId.length; k < len3; k++){
                filterResult[filterId[k]] = allPannelFilters[filterId[k]];
              }
              //console.log(filterResult);
              return filterResult;
            };
          };
        };
        return {};
      };



      if (String(chart.id) !== filterKey && immune.indexOf(chart.id) === -1) {
        const updatedFormData = getFormDataWithExtraFilters({
          chart,
          dashboardMetadata: this.props.dashboardInfo.metadata,
          filters: returnFinalFilter.call(this, chart.id),
          sliceId: chart.id,
        });
        //console.log(returnFinalFilter.call(this, chart.id))
        this.props.actions.runQuery(
          updatedFormData,
          false,
          this.props.timeout,
          chart.id,
        );
      }
    });
  }

  render(){
    return <DashboardBuilder />;
  }
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
