import echarts from 'echarts';

function echartsFunnelVis(slice, payload) {
    const div = d3.select(slice.selector);
    const slice_id = "echarts_slice_"+slice.formData.slice_id;
    var html = '<div id='+slice_id+' style="width: '+slice.width() +'' +
        'px;height:'+slice.height()+'px;"></div>';
    div.html(html);
    const fd = slice.formData;
    const json = payload.data;
    var data_name = [];
    const data = json;
    data.forEach(function (item, index, array) {
        data_name.push(item['name']);
    });
    var myChart = echarts.init(document.getElementById(slice_id));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        legend: {data: data_name},
        calculable: true,
        series: [
            {
                name:'漏斗图',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: false,
                        position: 'inside'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: data
            }
            ]
    };
    myChart.setOption(option);
}
module.exports = echartsFunnelVis;