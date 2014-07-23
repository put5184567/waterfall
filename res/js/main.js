$(document).ready(function() {
  var $container = $('#container'); 
  /*!
   *imagesLoaded是为了保证div宽度和高度继承与img对象
   */
  $container.imagesLoaded(function(){
    $('#container').masonry({
      itemSelector: '.item',
      gutterWidth: 10,
      // columnWidth: 200,
      isFitWidth: true
    });
    $('#waterfall').infinitescroll({
      navSelector: "#navigation", //导航的选择器，会被隐藏
      nextSelector: "#navigation a", //包含下一页链接的选择器
      itemSelector: ".item", //你将要取回的选项(内容块)
      debug: true, //启用调试信息,console log
      animate: true, //当有新数据加载进来的时候，页面是否有动画效果，默认没有
      extraScrollPx: 50, //滚动条距离底部多少像素的时候开始加载，默认150
      bufferPx: 40, //载入信息的显示时间，时间越大，载入信息显示时间越短
      template: function(data){//返回格式为json时的模板引擎
        var newImgs = data.returnValue;
        var str = '';
        for(var i = 0; i < newImgs.length; i++){
          str += '<div class="item"><a href="./detail.html"><img src="data:image/jpg;base64,'+ newImgs[i] +'"></a></div>';
        }
        return str;
      },
      errorCallback: function(e) {
        alert('error');
      }, //当出错的时候，比如404页面的时候执行的函数
      localMode: true, //是否允许载入具有相同函数的页面，默认为false
      dataType: 'json',//可以是html，例如直接加载page.html文件
      loading: {
        msgText: "加载中...",
        finishedMsg: '没有新数据了...',
        selector: '.loading' // 显示loading信息的div
      }
    },function(newElems) {
      $('#container').masonry('appended', $(newElems));
    });
  });
});   