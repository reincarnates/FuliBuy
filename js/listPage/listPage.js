$(function () {
  var acount = 1; //购物数量

  //商品介绍选项卡
  $('.fuli-filter-sort li').first().addClass("sort-active");
  $(".fuli-filter-sort li").click(function() {
    $(".fuli-filter-sort li").eq($(this).index()).addClass("sort-active").siblings().removeClass('sort-active');
  });

  //清空价格输入框
  $('.fuli-input-txt').focus(function() {
    $(this).val('');
  });

  $('.fuli-input-txt').blur(function() {
    $(this).val('￥');
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

});
