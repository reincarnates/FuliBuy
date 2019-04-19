$(function () {
  var tabCount = 0;
  //全屏轮播或者小屏
  // 1: 有广告位
  // 2：有个人中心
  // 3：全屏轮播
  var Bg = 2;
  //判断显示哪一种banner
  if (Bg == 1) {
    $('#adsense').css('display', 'block');
  } else if (Bg == 2) {
    $('#personal').css('display', 'block');
  } else if (Bg == 3) {
    $('#fullSlide').css('display', 'block');
  }

  //关闭顶部广告
  $('#close_advert').click(function () {
    $('.advert').remove();
  });

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
  $("#toTop").click(function () {
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
  

  // $(document).on('mouseover', '.adsense-menu ul li', function() {
  //   $(this).addClass('adsense-hover');
  //   $('.adsense-menu ul li a').each(function() {
  //     $(this).css('color', '#b29e77');
  //   });
  // });

  var adsHeight = $(".adsense-slide").height();
  $(".adsense-menu").css('height', adsHeight);

  // createFloor();

});

