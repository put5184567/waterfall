### node-waterfall

## introduce

```
  前端：
    比较简单，直接基于masonry和infinitescoll实现，图片加载参用base64
  服务：
    基于connect模式的node静态服务，需要配置node环境，建议在linux下启动

  这周一直在赶项目，所以没时间弄，需要优化的地方太多，比如前端完全可以基于requireJS来实现AMD，node服务的cache和异常处理等

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




