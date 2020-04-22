import echarts from 'echarts';
import 'echarts-gl';
import { geoNaturalEarth1 } from 'd3';

function echarts3DLineVis(slice, payload) {
    const div = d3.select(slice.selector);
    const slice_id = "echarts_slice_"+slice.formData.slice_id;
    var html = '<div id='+slice_id+' style="width: '+slice.width() +'' +
        'px;height:'+slice.height()+'px;"></div>';
    div.html(html);
    const fd = slice.formData;
    const json = payload.data;
    const data = json;

    var myChart = echarts.init(document.getElementById(slice_id));

    function generateOption(dateset) {

        let series = dateset.map(el => {
            return {
                    type: 'line3D',
                    name: el.legend,
                    data:el.zAxis    //每个区的数据一一对应
                }
            }
        );

        let xAxis = dateset[0].xAxis;
        let yAxis = dateset[0].yAxis;


        return {
            series,
            yAxis,
            xAxis
        }
    }


    var partial_option = generateOption(data);
    
    var option = {
        xAxis3D: {
            type: 'category',
            name: 'Order'
        },
        yAxis3D: {
            type: 'category',
            name: 'RPM'
        },
        zAxis3D: {
            type: 'value',
            name: 'Amplitude'
        },
        //图例
        legend: {
            orient: 'vertical',
            right: 0,
            top: 0,
            icon: 'roundRect'
        },
        tooltip:{
            show:true
        },
        grid3D: {
            boxWidth: 300,
            boxHeight:120,
            boxDepth: 200,
            axisLine: {
                show: true,
                interval: 0
            },
            viewControl: {
                distance: 400
            }
        },
        series: partial_option.series
    };
 

    myChart.setOption(option);
}


module.exports = echarts3DLineVis;