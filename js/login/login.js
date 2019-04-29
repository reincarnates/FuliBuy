$(function () {

  $(".login-information-head-item").click(function() {
    $(".login-information-head-item").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
    $(".ob2").eq($(".login-information-head-item").index(this)).addClass("on2").siblings().removeClass('on2'); 
  });
  
})