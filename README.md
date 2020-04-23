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



React JS学习教程*
https://www.runoob.com/react/react-jsx.html
React DOM元素，react当中的元素事实上是普通的对象，reactDOM可以确保浏览器DOM的数据内容与react元素保持一致。

函数的作用域
https://www.cnblogs.com/twoheads/p/9876396.html

Js回调函数 ，同步 异步的区别
https://www.cnblogs.com/BenSimmons/p/12075099.html

在windows上部署flask 生产环境
https://medium.com/@bilalbayasut/deploying-python-web-app-flask-in-windows-server-iis-using-fastcgi-6c1873ae0ad8


Pycrypto 安装错误解决办法：
https://blog.51cto.com/10616534/1951821

windows部署superset问题解决:
https://github.com/apache/incubator-superset/issues/8400#issue-507731806
https://fangyeqing.github.io/2017/03/04/superset%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/

Superset Dashboard 定义及使用（隐藏菜单栏）
https://blog.csdn.net/f4761/article/details/83000995
https://blog.csdn.net/l_lushuang/article/details/90716862


Superset去掉login
https://github.com/apache/incubator-superset/issues/450
Superset去掉menubar
https://github.com/apache/incubator-superset/issues/450
Superset允许public查看dashboard,修改用户权限
https://github.com/apache/incubator-superset/issues/7763

 from _sqlite3 import *
ImportError: DLL load failed: 找不到指定的模块。解决办法：官网下载Sqllite.dll 和ref文件复制到python.exe的目录下面，即可。

Superset的sqllab　ｗin10下无法使用：
修改superset\ utils.py，注释signal.signal(signal.SIGALRM, self.handle_timeout)）：
https://www.jianshu.com/p/b02fcea7eb5b  注释掉singal


Superset   sql lab查询
https://stackoverflow.com/questions/51213670/does-superset-support-query-join-multiple-tables-at-a-time
Superset query view查询
https://stackoverflow.com/questions/48434895/visualize-raw-output-of-sql-lab-query-in-superset


Superset(低于0.30版本)集成echarts
https://zhuanlan.zhihu.com/p/45389028


Superset新版本(>0.30)添加echarts图形类型
https://blog.csdn.net/MK_chan/article/details/86532728
https://zhuanlan.zhihu.com/p/99595219


Superset汉化
https://www.cnblogs.com/Jonecmnn/p/7417498.html
https://www.cnblogs.com/Jonecmnn/p/7551793.html
https://blog.csdn.net/zql898626913/article/details/75411810
https://www.jianshu.com/p/b38c59c82f78
https://blog.csdn.net/a549416598/article/details/82382450


Superset修改label显示中文名
https://devspark.tistory.com/entry/How-to-rename-metric-column-name-in-superset


Filter应用级别的问题，应用到整个面板导致dashborad图多的时候刷新缓慢
https://superset-hamutuk.catalpa.build/dashboardmodelview/edit/7


python windows IIS服務器部署
https://www.jianshu.com/p/8b6b263144ba

Customizing Apache Superset UI – Config , Theme Changes
https://debaatobiee.wordpress.com/2019/08/04/customizing-apache-superset-ui-config-theme-changes/

Docker 生产环境 superset
https://github.com/abhioncbr/docker-superset
https://dzone.com/articles/apache-superset-in-the-production-environment


Star if u like. thanks.

![image](https://github.com/wuxuedaifu/apache-superset/blob/master/1.PNG)


![image](https://github.com/wuxuedaifu/apache-superset/blob/master/2.PNG)





