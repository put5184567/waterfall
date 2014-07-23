### node-waterfall

## introduce

```
  囧，mac用户稍微测试了下IE10和chrome没问题，其它的浏览器应该问题不大

  前端：
    比较简单，直接基于masonry和infinitescoll实现，图片加载参用base64，总共就10张，每次循环随机渲染
  服务：
    基于connect模式的node静态服务，需要配置node环境，建议在linux下启动

  这周一直在赶项目，所以没时间弄，需要优化的地方太多，比如图片都是网上随便找的，大小和格式都没有处理；前端完全可以基于requireJS来实现AMD，node服务的cache和异常处理等等

```

## start

```
 建议在linux下启动
 
 1、进入waterfall目录
    a)、安装node
    b)、执行npm install
    c)、执行node ./lib/app.js （默认8080端口）
 2、本地配置host: 127.0.0.1 localhost
 3、访问localhost:8080 或者 127.0.0.1:8080

```




