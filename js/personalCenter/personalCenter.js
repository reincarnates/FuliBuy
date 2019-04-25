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

});