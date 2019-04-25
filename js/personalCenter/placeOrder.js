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

function focusNextInput(thisInput) {   
  var inputs = document.querySelectorAll('.pay-input');
  for(var i = 0;i<inputs.length;i++){   
    // 如果是最后一个，则焦点回到第一个(如果想实现按顺序可以登陆，可以写入登陆方法)   
    if(i==(inputs.length-1)){   
        inputs[i].blur(); break;   
    }else if(thisInput == inputs[i]){   
        inputs[i+1].focus(); break;   
    }   
  }   
}   