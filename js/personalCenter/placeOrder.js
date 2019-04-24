$(function() {
  $(".fuli-take-goods-wrapper").first().addClass('take-border');
  $(".fuli-take-goods-wrapper img").first().addClass('take-block');
  $(".fuli-take-goods-wrapper").click(function() {
    $(this).addClass('take-border').siblings().removeClass('take-border');
    $(this).siblings().find("img").removeClass('take-block');
    $(this).find("img").addClass('take-block');
  });

  
  $(".payment-mode").first().addClass('payment-active');
  $('.payment-radio').click(function() {
    $(this).siblings().find(".payment-mode").removeClass('payment-active');
    $(this).find(".payment-mode").addClass('payment-active');
  });

});