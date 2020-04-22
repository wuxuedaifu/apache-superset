import echarts from 'echarts';
import 'echarts-gl';
import { geoNaturalEarth1 } from 'd3';

function echartsbaseLineVis(slice, payload) {
    const div = d3.select(slice.selector);
    const slice_id = "echarts_slice_"+slice.formData.slice_id;
    var html = '<div id='+slice_id+' style="width: '+slice.width() +'' +
        'px;height:'+slice.height()+'px;"></div>';
    div.html(html);
    const fd = slice.formData;
    const json = payload.data;
    const dataset = json;

    var myChart = echarts.init(document.getElementById(slice_id));

    var option = {
        xAxis: {
            type: 'category',
            data: dataset[0].xAxis.map(Number)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: dataset[0].yAxis,
            type: 'line'
        }]
    };
    
 

    myChart.setOption(option);
}


module.exports = echartsbaseLineVis;