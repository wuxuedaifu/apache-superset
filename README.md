# apache-superset
based on superset 0.28, several updates and customized echart visualization.

1. add echat stack bar line chart
        echart mixed line bar chart
        echart 3D scatter chart
        echart funnel chart
        echat geomap chart
  添加echart图形类型： 3D 散点图， 叠加柱状图，漏斗图，geomap。      
2. optimize filter apply logic for speeding up chart refresh: one time fiter box only control it's parent tab(not the whole dashboard)
优化时间筛选器应用逻辑，缩短看板刷新时间（时间筛选器仅应用于当前页,而不是整个，而不是整个看板）
刷新时间控制在3秒以内。
3. apply multiple metrics on both left and right Y axis.
双坐标Y轴情况下，都可选取多个metric指标。
4. add tooltip types. 
图例模式修改。
5. windows deployment.
6. python scripts for revising chart label.
批量修改图例名脚本

Star if u like. thanks.

![image](https://github.com/wuxuedaifu/apache-superset/blob/master/1.PNG)


![image](https://github.com/wuxuedaifu/apache-superset/blob/master/2.PNG)





