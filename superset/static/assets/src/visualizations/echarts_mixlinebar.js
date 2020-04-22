import echarts from 'echarts';

function echartsmixlinebarVis(slice, payload) {
    const div = d3.select(slice.selector);
    const slice_id = "echarts_slice_"+slice.formData.slice_id;
    var html = '<div id='+slice_id+' style="width: '+slice.width() +'' +
        'px;height:'+slice.height()+'px;"></div>';
    div.html(html);
    const fd = slice.formData;
    const json = payload.data;
    const data = json;

    var myChart = echarts.init(document.getElementById(slice_id), 'shine', {renderer: 'svg'});

    function generateOption(dateset) {
        let yAxis = dateset.map(el => el.yAxis);
        yAxis = [...new Set(yAxis)].map(y => {
            return {
                id: y,
                type: 'value',
                name: 'xxx'
            }
        })

        let legend = dateset.map(el => el.key);

        let series = dateset.map(el => {
            return {
                name: el.key,
                type: el.type,
                yAxisIndex: el.yAxis,
                label: {
                    show: false,
                    position: 'insideRight'
                },				
                data: el.values.map(v => v.y.toFixed(2))

            }
        })
        let xAxis_data = dateset[0].values.map(v => v.x);
        let xAxis = {
                type: 'category',
                data: xAxis_data,
                axisPointer: {
                    type: 'line'
                }
            }

        return {
            series,
            yAxis,
            xAxis,
            legend
        }
    }


    var partial_option = generateOption(data);

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: partial_option.legend
        },
        xAxis: [partial_option.xAxis],
        yAxis: [
            {
                type: 'value'
            },
            {
                type: 'value',
				yAxisIndex: 1,
            }
        ],
        series: partial_option.series
    };

    myChart.setOption(option);
    console.log(partial_option.xAxis);
    console.log(option);


}


module.exports = echartsmixlinebarVis;