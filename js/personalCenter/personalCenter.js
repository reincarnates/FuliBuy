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

});