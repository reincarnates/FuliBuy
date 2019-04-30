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
  $('#searchGoods').focus(function() {
    $('.fuli-shelper,.fuli-shelper2,.fuli-shelper3').css('display', 'block');
  }).blur(function() {
    $('.fuli-shelper,.fuli-shelper2,.fuli-shelper3').css('display', 'none');
  });

  //右侧面板购物车点击加背景
  $("#tab-cart").click(function () {
    if (tabCount == 0) {
      $(this).addClass('fuli-toolbar-tabs-selected');
      $('.fuli-toolbar').css('right', '-31px');
      tabCount++;
    } else {
      $(this).removeClass('fuli-toolbar-tabs-selected');
      $('.fuli-toolbar').css('right', '-289px');
      tabCount = 0;
    }
  });

  //关闭购物车
  $('.closeSideCart').click(function() {
    $('#tab-cart').removeClass('fuli-toolbar-tabs-selected');
    $('.fuli-toolbar').css('right', '-289px');
    tabCount = 0;
  });

  //显示右侧购物车删除按钮
  $('.fuli-toolbar-panels-goods').mouseover(function() {
    $(this).find('.toolbar-panels-goods-right .priceAndDel .panels-goods-del').show();
  }).mouseout(function() {
    $(this).find('.toolbar-panels-goods-right .priceAndDel .panels-goods-del').hide();
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
  $('.search-cart-bg,.search-cart-select,.search-cart-select2,.search-select-small,.search-not-cart').mouseover(function() {
    $('.search-cart-bg').addClass("select-bg");
    $('.search-cart-select').addClass("select-border");
    $('.search-cart-select2').addClass("select-border");
    $('.search-not-cart').addClass("select-border");
    $('.search-select-small').addClass("select-border2");
    $('.search-cart-all-price').show();
  }).mouseout(function() {
    $('.search-cart-bg').removeClass("select-bg");
    $('.search-cart-select').removeClass("select-border");
    $('.search-cart-select2').removeClass("select-border");
    $('.search-not-cart').removeClass("select-border");
    $('.search-select-small').removeClass("select-border2");
    $('.search-cart-all-price').hide();
  });

  $('.tbar-panel-header .close-panel').click(function() {
    $('.toolbar-wrap').removeClass('toolbar-open')
  });

  //酒水生鲜
  $('.fuli-fresh-goods-item').mouseover(function() {
    $(this).css('borderColor','#ccc');
  }).mouseout(function() {
    $(this).css('borderColor','#fff');
  });

  //左侧菜单hover效果
  // $(".adsense-menu ul li, .personal-menu ul li").each(function(){
  //   $(this).mouseover(function(){
  //       $(this).children().addClass('adsense-a-hover'); 
  //       $(this).addClass("adsense-hover");
  //       $('.adsense-list-select').css('display', 'block');
  //   })
    
  //   $(this).mouseout(function(){
  //       $(this).children().removeClass("adsense-a-hover");
  //       $(this).removeClass("adsense-hover");
  //       $('.adsense-list-select').css('display', 'none');
  //   })

  //   $('.adsense-list-select').mouseover(function(){
  //     $(this).show();
  //   })

  //   $('.adsense-list-select').mouseout(function(){
  //     $(this).hide();
  //   })

  // })
  

  // $(document).on('mouseover', '.adsense-menu ul li', function() {
  //   $(this).addClass('adsense-hover');
  //   $('.adsense-menu ul li a').each(function() {
  //     $(this).css('color', '#b29e77');
  //   });
  // });

  var adsHeight = $(".adsense-slide").height();
  $(".adsense-menu").css('height', adsHeight);

  //选择省份
  $('.select-city').mouseover(function() {
    $(this).css({'background':'#fff','borderColor':'#d1d1d1'});
    $('.cover').show();
    $('.home-city').show();
  }).mouseout(function() {
    $(this).css({'background':'none','borderColor':'#f5f5f5'});
    $('.cover').hide();
    $('.home-city').hide();
  });

  $('.city-select dl dd a').click(function() {
    $('.check-city').text($(this).text());
  });

  //我的订单
  $('.myOrder,.myOrder2').mouseover(function() {
    $(this).css({'background':'#fff','borderColor':'#d1d1d1'});
    $(this).find('.myOrder-item').show();
  }).mouseout(function() {
    $(this).css({'background':'none','borderColor':'#f5f5f5'});
    $(this).find('.myOrder-item').hide();
  });

  //APP
  $('.App').mouseover(function() {
    $(this).find('.App-item').show();
  }).mouseout(function() {
    $(this).find('.App-item').hide();
  });

  //搜索完成显示的列表
  $('.goods-list li').mouseover(function() {
    $(this).css('background','#eee');
    $(this).find('.history').text('删除').css('color','#2c7bb4');
  }).mouseout(function() {
    $(this).css('background','none');
    $(this).find('.history').text('历史记录').css('color','#b7b7b7');
  });

  //楼层商品
  $('.floor-goods-item').mouseover(function() {
    $(this).find('.floor-goods-all').css('bottom','10px');
  }).mouseout(function() {
    $(this).find('.floor-goods-all').css('bottom','-35px');
  });

  //点击收藏
  $('.floor-goods-collect').click(function() {
    $(this).addClass('floor-xing');
    $(this).find('span').text('已收藏');
  });

  //点击加入购物车
  $('.floor-addcart').click(function() {
    $(this).find('span').text('已加购');
    $(this).find('img').show();
  });

  //标题变颜色
  $('.fuli-box-head').mouseover(function() {
    $(this).find('.fuli-box-hk .fuli-box-tit').css('color','#e98930');
  }).mouseout(function() {
    $(this).find('.fuli-box-hk .fuli-box-tit').css('color','#222');
  });


  $('.tbar-cart-item').hover(function (){ $(this).find('.p-del').show(); },function(){ $(this).find('.p-del').hide(); });
	$('.jth-item').hover(function (){ $(this).find('.add-cart-button').show(); },function(){ $(this).find('.add-cart-button').hide(); });
	$('.toolbar-tab').hover(function (){ $(this).find('.tab-text').addClass("tbar-tab-hover"); $(this).find('.footer-tab-text').addClass("tbar-tab-footer-hover"); $(this).addClass("tbar-tab-selected");},function(){ $(this).find('.tab-text').removeClass("tbar-tab-hover"); $(this).find('.footer-tab-text').removeClass("tbar-tab-footer-hover"); $(this).removeClass("tbar-tab-selected"); });
	$('.tbar-tab-cart').click(function (){ 
		if($('.toolbar-wrap').hasClass('toolbar-open')){
			if($(this).find('.tab-text').length > 0){
				if(! $('.tbar-tab-follow').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>联系客服</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
				}
				if(! $('.tbar-tab-history').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
				}
				$(this).addClass('tbar-tab-click-selected'); 
				$(this).find('.tab-text').remove();
				$('.tbar-panel-cart').css({'visibility':"visible","z-index":"1"});
				
			}else{
				var info = "<em class='tab-text '>联系客服</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
			}
			 
			
		}else{ 
			$(this).addClass('tbar-tab-click-selected'); 
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css({'visibility':"visible","z-index":"1"});
			$('.tbar-panel-follow').css('visibility','hidden');
			$('.tbar-panel-history').css('visibility','hidden');
			$('.toolbar-wrap').addClass('toolbar-open'); 
		}
	});
	$('.tbar-tab-follow').click(function (){ 
		// if($('.toolbar-wrap').hasClass('toolbar-open')){
		// 	if($(this).find('.tab-text').length > 0){
		// 		if(! $('.tbar-tab-cart').find('.tab-text').length > 0){
		// 			var info = "<em class='tab-text '>购物车</em>";
		// 			$('.tbar-tab-cart').append(info);
		// 			$('.tbar-tab-cart').removeClass('tbar-tab-click-selected'); 
		// 			$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
		// 		}
		// 		if(! $('.tbar-tab-history').find('.tab-text').length > 0){
		// 			var info = "<em class='tab-text '>我的足迹</em>";
		// 			$('.tbar-tab-history').append(info);
		// 			$('.tbar-tab-history').removeClass('tbar-tab-click-selected'); 
		// 			$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
		// 		}
		// 		$(this).addClass('tbar-tab-click-selected'); 
		// 		$(this).find('.tab-text').remove();
		// 		$('.tbar-panel-follow').css({'visibility':"visible","z-index":"1"});
				
		// 	}else{
		// 		var info = "<em class='tab-text '>联系客服</em>";
		// 		$('.toolbar-wrap').removeClass('toolbar-open');
		// 		$(this).append(info);
		// 		$(this).removeClass('tbar-tab-click-selected');
		// 		$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
		// 	}
			 
			
		// }else{ 
		// 	$(this).addClass('tbar-tab-click-selected'); 
		// 	$(this).find('.tab-text').remove();
		// 	$('.tbar-panel-cart').css('visibility','hidden');
		// 	$('.tbar-panel-follow').css({'visibility':"visible","z-index":"1"});
		// 	$('.tbar-panel-history').css('visibility','hidden');
		// 	$('.toolbar-wrap').addClass('toolbar-open'); 
		// }
	});
	$('.tbar-tab-history').click(function (){ 
		if($('.toolbar-wrap').hasClass('toolbar-open')){
			if($(this).find('.tab-text').length > 0){
				if(! $('.tbar-tab-follow').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>我的关注</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
				}
				if(! $('.tbar-tab-cart').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>购物车</em>";
					$('.tbar-tab-cart').append(info);
					$('.tbar-tab-cart').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
				}
				$(this).addClass('tbar-tab-click-selected'); 
				$(this).find('.tab-text').remove();
				$('.tbar-panel-history').css({'visibility':"visible","z-index":"1"});
				
			}else{
				var info = "<em class='tab-text '>我的足迹</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
			}
			
		}else{ 
			$(this).addClass('tbar-tab-click-selected'); 
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css('visibility','hidden');
			$('.tbar-panel-follow').css('visibility','hidden');
			$('.tbar-panel-history').css({'visibility':"visible","z-index":"1"});
			$('.toolbar-wrap').addClass('toolbar-open'); 
		}
	});
	

});

