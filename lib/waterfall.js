/*!
 * waterfall api数据模块
 * waterfall - lib/Waterfall.js
 * Copyright(c) 2014 Taobao.com
 * Author: put <put5184567@gmail.com>
 */

var Emitter  = require('events').EventEmitter;
var util     = require('util');
var Url      = require('url');
var fs       = require('fs');

var Waterfall = function (options) {
  this.options = options || {
    imgDir: './res/img'
  };
};
util.inherits(Waterfall, Emitter);

Waterfall.prototype.route = function(req, res){
  var url = req.url;
  var urlObj = Url.parse(url, true);
  var method = urlObj.pathname.substr(1);
  var param = urlObj.query;
  if(this[method]){
    this[method](req, res);
  }else{
    return res.end('not found');
  }
}

Waterfall.prototype.getJson = function(req, res){
  var path = this.options.imgDir;
  var imgArr = [];//保存图片数据
  fs.readdir(path, function(err, files){
    if(err){
      console.log(err.message);
      return res.end(err.message);
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    req.on('reqEnd', function(data){
      res.end(JSON.stringify({
        returnCode: '0',
        returnValue: data
      }));
    });
    for(var i = 0; i < files.length; i++){
      /*
       *异步处理，这里用的event机制，可以用promise模式优化
       */
      fs.readFile(path + '/' + files[i], function(err, data){
        if(!err){
          data = data.toString('base64');
          imgArr.push(data);
        }
        if(imgArr.length === files.length){
          req.emit('reqEnd', imgArr);
        }
      });
    }
  });
}

/*
 *connect规范，暴露middleware方法挂载
 */
Waterfall.prototype.middleware = function() {
  var _self = this;
  return function (req, res, next) {
    _self.route(req, res);
  };
}

module.exports = function (options) {
  return new Waterfall(options);
};