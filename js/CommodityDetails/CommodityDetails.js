$(function () {
  var tabCount = 0;
  var acount = 1; //购物数量

  //搜索商品输入框去掉placeholder,添加placeholder
  $("#searchGoods").focus(function () {
    $(this).attr('placeholder', "");
  });

  $("#searchGoods").blur(function () {
    if ($(this).val() == "") {
      $(this).attr('placeholder', '国际大牌母婴用品');
    }
  });

  //搜索框发生改变
  $('#searchGoods').keyup(function() {
    $('.fuli-shelper').css('display', 'block');
    if($(this).val() == '') {
      $('.fuli-shelper').css('display', 'none');
    }
  });

  //右侧面板购物车点击加背景
  $("#tab-cart").click(function () {
    if (tabCount == 0) {
      $(this).addClass('fuli-toolbar-tabs-selected');
      $('.fuli-toolbar').css('right', '-25px');
      tabCount++;
    } else {
      $(this).removeClass('fuli-toolbar-tabs-selected');
      $('.fuli-toolbar').css('right', '-289px');
      tabCount = 0;
    }
  });

  //右侧面板鼠标移入显示简介  
  $(".fuli-toolbar-tab,.fuli-toolbar-tab2").each(function(){
    $(this).mouseover(function(){
        $(this).children(".fuli-toolbar-text").addClass('toolbar-text-left'); 
        $(this).addClass("toolbar-text-bg");
    })
    $(this).mouseout(function(){
        $(this).children(".fuli-toolbar-text").removeClass("toolbar-text-left");
        $(this).removeClass("toolbar-text-bg");
    })
  })
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  //当点击跳转链接后，回到页面顶部位置
  $(".toolbar-tab .tbar-tab-top").click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    // return false;
  });

  //购物车hover下拉
  $('.search-cart-bg,.search-cart-select,.search-select-small').mouseover(function() {
    $('.search-cart-bg').addClass("select-bg");
    $('.search-cart-select').addClass("select-border");
    $('.search-select-small').addClass("select-border2");
  }).mouseout(function() {
    $('.search-cart-bg').removeClass("select-bg");
    $('.search-cart-select').removeClass("select-border");
    $('.search-select-small').removeClass("select-border2");
  });

  //左侧菜单hover效果
  $(".adsense-menu ul li, .personal-menu ul li").each(function(){
    $(this).mouseover(function(){
        $(this).children().addClass('adsense-a-hover'); 
        $(this).addClass("adsense-hover");
        $('.adsense-list-select').css('display', 'block');
    })
    
    $(this).mouseout(function(){
        $(this).children().removeClass("adsense-a-hover");
        $(this).removeClass("adsense-hover");
        $('.adsense-list-select').css('display', 'none');
    })

    $('.adsense-list-select').mouseover(function(){
      $(this).show();
    })

    $('.adsense-list-select').mouseout(function(){
      $(this).hide();
    })
  })

  //选择商品颜色
  $('.select-item').first().addClass("active");
  $('.select-item').first().find('.select-item-img').addClass("db");
  $('.select-item').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).siblings().find(".select-item-img").removeClass('db');
    $(this).find(".select-item-img").addClass('db');
  });

  //选择商品净含量
  $('.net-content-item').first().addClass("active");
  $('.net-content-item').first().find('.select-item-img2').addClass("db");
  $('.net-content-item').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).siblings().find(".select-item-img2").removeClass('db');
    $(this).find(".select-item-img2").addClass('db');
  });

  //商品默认数量
  $('.Calculator-input').val(acount);

  //增加商品数量
  $('.amount-add').click(function () {
    $('.Calculator-input').val(++acount);
  });

  //减少商品数量
  $('.amount-reduce').click(function () {
    if($('.Calculator-input').val() > 1) {
      $('.Calculator-input').val(--acount);
    }
  });

  //商品介绍选项卡
  $(".tab li").click(function() {
    $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
  });

  //评价选项卡
  $(".tab2 li").click(function() {
    $(".tab2 li").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
    $(".ob2").eq($(".tab2 li").index(this)).addClass("on2").siblings().removeClass('on2'); 
  });

   // 图片上下滚动
   var count = $("#imageMenu li").length; /* 显示 6 个 li标签内容 */
   var interval = $("#imageMenu li:first").width();
   var curIndex = 0;

   $('.scrollbutton').click(function () {
       if(count == 1) {
        $('.smallImgDown').addClass('disabled')
       }
       if ($(this).hasClass('disabled')) return false;

       if ($(this).hasClass('smallImgUp'))--curIndex;

       else ++curIndex;

       $('.scrollbutton').removeClass('disabled');

       if (curIndex == 0) $('.smallImgUp').addClass('disabled');

       if (curIndex == count - 1) $('.smallImgDown').addClass('disabled');

       $("#imageMenu ul").stop(false, true).animate({ "marginLeft": -curIndex * interval + "px" }, 600);

   });

   // 解决 ie6 select框 问题

   $.fn.decorateIframe = function (options) {

       if ($.browser.msie && $.browser.version < 7) {

           var opts = $.extend({}, $.fn.decorateIframe.defaults, options);

           $(this).each(function () {

               var $myThis = $(this);

               //创建一个IFRAME

               var divIframe = $("<iframe />");

               divIframe.attr("id", opts.iframeId);

               divIframe.css("position", "absolute");

               divIframe.css("display", "none");

               divIframe.css("display", "block");

               divIframe.css("z-index", opts.iframeZIndex);

               divIframe.css("border");

               divIframe.css("top", "0");

               divIframe.css("left", "0");

               if (opts.width == 0) {

                   divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");

               }

               if (opts.height == 0) {

                   divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");

               }

               divIframe.css("filter", "mask(color=#fff)");

               $myThis.append(divIframe);

           });

       }

   }

   $.fn.decorateIframe.defaults = {

       iframeId: "decorateIframe1",

       iframeZIndex: -1,

       width: 0,

       height: 0

   }

   //放大镜视窗

   $("#bigView").decorateIframe();

   //点击到中图

   var midChangeHandler = null;



   $("#imageMenu li img").bind("click", function () {

       if ($(this).attr("id") != "onlickImg") {

           midChange($(this).attr("src").replace("small", "mid"));

           $("#imageMenu li").removeAttr("id");

           $(this).parent().attr("id", "onlickImg");

       }

   }).bind("mouseover", function () {

       if ($(this).attr("id") != "onlickImg") {

           window.clearTimeout(midChangeHandler);

           midChange($(this).attr("src").replace("small", "mid"));

           $(this).css({ "border": "3px solid #959595" });

       }

   }).bind("mouseout", function () {

       if ($(this).attr("id") != "onlickImg") {

           $(this).removeAttr("style");

           midChangeHandler = window.setTimeout(function () {

               midChange($("#onlickImg img").attr("src").replace("small", "mid"));

           }, 1000);

       }

   });

   function midChange(src) {

       $("#midimg").attr("src", src).load(function () {

           changeViewImg();

       });

   }

   //大视窗看图

   function mouseover(e) {

       if ($("#winSelector").css("display") == "none") {

           $("#winSelector,#bigView").show();

       }

       $("#winSelector").css(fixedPosition(e));

       e.stopPropagation();

   }

   function mouseOut(e) {

       if ($("#winSelector").css("display") != "none") {

           $("#winSelector,#bigView").hide();

       }

       e.stopPropagation();

   }

   $("#midimg").mouseover(mouseover); //中图事件

   $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件



   var $divWidth = $("#winSelector").width(); //选择器宽度

   var $divHeight = $("#winSelector").height(); //选择器高度

   var $imgWidth = $("#midimg").width(); //中图宽度

   var $imgHeight = $("#midimg").height(); //中图高度

   var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度



   function changeViewImg() {

       $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));

   }

   changeViewImg();

   $("#bigView").scrollLeft(0).scrollTop(0);

   function fixedPosition(e) {

       if (e == null) {

           return;

       }

       var $imgLeft = $("#midimg").offset().left; //中图左边距

       var $imgTop = $("#midimg").offset().top; //中图上边距

       X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X

       Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y

       X = X < 0 ? 0 : X;

       Y = Y < 0 ? 0 : Y;

       X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

       Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



       if ($viewImgWidth == null) {

           $viewImgWidth = $("#bigView img").outerWidth();

           $viewImgHeight = $("#bigView img").height();

           if ($viewImgWidth < 200 || $viewImgHeight < 200) {

               $viewImgWidth = $viewImgHeight = 800;

           }

           $height = $divHeight * $viewImgHeight / $imgHeight;

           $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

           $("#bigView").height($height);

       }

       var scrollX = X * $viewImgWidth / $imgWidth;

       var scrollY = Y * $viewImgHeight / $imgHeight;

       $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });

       $("#bigView").css({ "top": 218, "left": $(".preview").offset().left + $(".preview").width() + 15 });



       return { left: X, top: Y };

   }

   //点击跳转到对应的位置
  //  $('#evaluate').click(function() {
  //   $("html,body").animate(
  //     {scrollTop:3500},500 /*scroll实现定位滚动*/
  //     );/*让整个页面可以滚动*/
  //     return false; 
  //  });

  //  $('#specs').click(function() {
  //   $("html,body").animate(
  //     {scrollTop:2420},500 /*scroll实现定位滚动*/
  //     );/*让整个页面可以滚动*/
  //     return false; 
  //  });

  //  $('#service').click(function() {
  //   $("html,body").animate(
  //     {scrollTop:2950},500 /*scroll实现定位滚动*/
  //     );/*让整个页面可以滚动*/
  //     return false; 
  //  });


});
