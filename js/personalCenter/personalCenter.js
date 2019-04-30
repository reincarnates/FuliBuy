$(function() {
  // $(".list_dt").first().attr("id","open").next().slideDown();
  // $(".list_dt").on("click",function () {
    // $('.list_dd').stop();
    // $(this).siblings("dt").removeAttr("id");
    // if($(this).attr("id")=="open"){
    //     $(this).removeAttr("id").siblings("dd").slideUp();
    // }else{
    //     $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
    // }
  // });
  $(".list_li").click(function() {
    // $(this).addClass('list_li_active').siblings().removeClass('list_li_active');
    $(this).siblings().find(".list_li").removeClass('list_li_active');
    $(this).find(".list_li").addClass('list_li_active');
  });

  //评价选项卡
  $(".tab2 li").click(function() {
    $(".tab2 li").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
    $(".ob2").eq($(".tab2 li").index(this)).addClass("on2").siblings().removeClass('on2'); 
  });

  $(".fuli-peronal-home-tabs-item").click(function() {
    $(".fuli-peronal-home-tabs-item").eq($(this).index()).addClass("cur5").siblings().removeClass('cur5');
    $(".ob2").eq($(".fuli-peronal-home-tabs-item").index(this)).addClass("on2").siblings().removeClass('on2'); 
  });

  // $(".fuli-peronal-home-tit .fuli-peronal-home-tit-word2").click(function() {
  //   $(".fuli-peronal-home-tit .fuli-peronal-home-tit-word2").eq($(this).index()).addClass("cur6").siblings().removeClass('cur6');
  //   $(".ob3").eq($(".fuli-peronal-home-tit .fuli-peronal-home-tit-word2").index(this)).addClass("on3").siblings().removeClass('on3'); 
  // });

  //订单首页导航hover显示
  $('.account,.message').mouseover(function() {
    $(this).find('.account-select').show();
    $(this).find('.triangle_border_up2').show();
  }).mouseout(function() {
    $(this).find('.account-select').hide();
    $(this).find('.triangle_border_up2').hide();
  });

  //选择规定时间段的订单
  $('.fuli-order-left').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display','none');
  });

  $('.fuli-order-left-item ul li').click(function() {
    $('.fuli-check-time').text($(this).text());
  });

  //选择订单状态
  $('.all-status').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-list-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item2').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-list-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item2').css('display','none');
  });

  $('.all-status ul li').click(function() {
    $('.check-list').text($(this).text());
  });

  tabPage({
    pageMain: '.fuli-balance-wrapper',
    pageNav: '#pageNav',
    pagePrev: '#prev',
    pageNext: '#next',
    curNum: 10, /*每页显示的条数*/
    activeClass: 'pageActive', /*高亮显示的class*/
    ini: 0/*初始化显示的页面*/
  });
  
  function tabPage(tabPage) {
    var pageMain = $(tabPage.pageMain);
    /*获取内容列表*/
    var pageNav = $(tabPage.pageNav);
    /*获取分页*/
    var pagePrev = $(tabPage.pagePrev);
    /*上一页*/
    var pageNext = $(tabPage.pageNext);
    /*下一页*/


    var curNum = tabPage.curNum;
    /*每页显示数*/
    var len = Math.ceil(pageMain.find(".fuli-balance-content").length / curNum);
    /*计算总页数*/
    console.log(len);
    var pageList = '';
    /*生成页码*/
    var iNum = 0;
    /*当前的索引值*/

    for (var i = 0; i < len; i++) {
        pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
    }
    pageNav.html(pageList);
    /*头一页加高亮显示*/
    pageNav.find("a:first").addClass(tabPage.activeClass);

    /*******标签页的点击事件*******/
        pageNav.find("a").each(function(){
          $(this).click(function () {
              pageNav.find("a").removeClass(tabPage.activeClass);
              $(this).addClass(tabPage.activeClass);
              iNum = $(this).index();
              $(pageMain).find(".fuli-balance-content").hide();
              for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                  $(pageMain).find(".fuli-balance-content").eq(i).show()
              }

          });
    })


    $(pageMain).find(".fuli-balance-content").hide();
    /************首页的显示*********/
    for (var i = 0; i < curNum; i++) {
        $(pageMain).find(".fuli-balance-content").eq(i).show()
    }


    /*下一页*/
    pageNext.click(function () {
        $(pageMain).find(".fuli-balance-content").hide();
        if (iNum == len - 1) {
            alert('已经是最后一页');
            for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                $(pageMain).find(".fuli-balance-content").eq(i).show()
            }
            return false;
        } else {
            pageNav.find("a").removeClass(tabPage.activeClass);
            iNum++;
            pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
//                    ini(iNum);
        }
        for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
            $(pageMain).find(".fuli-balance-content").eq(i).show()
        }
    });
    /*上一页*/
    pagePrev.click(function () {
        $(pageMain).find(".fuli-balance-content").hide();
        if (iNum == 0) {
            alert('当前是第一页');
            for (var i = 0; i < curNum; i++) {
                $(pageMain).find(".fuli-balance-content").eq(i).show()
            }
            return false;
        } else {
            pageNav.find("a").removeClass(tabPage.activeClass);
            iNum--;
            pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
        }
        for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
            $(pageMain).find(".fuli-balance-content").eq(i).show()
        }
    })
  }

});