/*!
 * waterfall静态服务app入口
 * waterfall - lib/waterfall.js
 * Copyright(c) 2014 Taobao.com
 * Author: put <put5184567@gmail.com>
 */

var http          = require("http");
var fs            = require('fs');
var connect       = require('connect'); 
var staticServer  = require('node-static');
var waterfall     = require('./waterfall.js');

/*
 *初始化静态服务stage module
 */
var fileServer = new staticServer.Server('./res');

/*
 *应用connect注册路由
 */
var app = connect();
/*
 *api路由
 */
app.use('/r/api/', waterfall().middleware());
/*
 *静态资源处理
 */
app.use(function (req, res, next) {
  req.addListener('end', function () {
    fileServer.serve(req, res);
  }).resume();
});

http.createServer(app).listen(8080);
console.log('ok');