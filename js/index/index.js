$(function () {
  var tabCount = 0;
  //全屏轮播或者小屏
  // 1: 有广告位
  // 2：有个人中心
  // 3：全屏轮播
  var Bg = 1;

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

  var adsHeight = $(".adsense-slide").height();
  $(".adsense-menu").css('height', adsHeight);

  createFloor();

});

function createFloor() {
  var list = {
    "success": true,
    "code": "200",
    "msg": "请求成功",
    "jsonResult": [{
      "type": 1,
      "title": "3C数码",
      "word_key": [
        {
          "name": "手机",
          "url": "http://www.helibuy.cn/mall/s-311-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "对讲机",
          "url": "http://www.helibuy.cn/mall/s-312-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "上网卡",
          "url": "http://www.helibuy.cn/mall/s-313-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "传呼机",
          "url": "http://www.helibuy.cn/mall/s-314-0-0-0-0-0-0-0-0.html"
        }
      ],
      "data_list": {
        "small_banner": [
          {
            "url": "http://www.helibuy.cn/mall/c-31698.html",
            "image_url": "http://img11.360buyimg.com/n1/jfs/t13216/145/228410942/86121/8e989ee2/5a06a6a5N01353ee2.jpg"
          },
          {
            "url": "http://www.helibuy.cn/mall/c-30674.html",
            "image_url": "http://www.helibuy.cn/data/upload/mall/editor/web-6-65-2-32.jpg?564"
          }
        ],
        "brand_list": [
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20181020/917b7087f886c089249e2528a0bfc6da.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20190214/965b104cd58867beb1a3d3e0cf733d24.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "http://www.helibuy.cn/data/upload/mall/article/06084014540617504.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20190214/3e216ea16369b82b2784ef2e9d6a0792.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20181116/2d6c7446728571bb1674e7e58dfd42e7.jpg"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20190219/f36c9f7bc48b35cc278baf588b664c0e.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20180926/949cb94cf626d0a26369e567dfe92a11.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20190312/9a10ed48593cf6ba8dd620008143e428.gif"
          },
          {
            "brand_id": "",
            "brand_name": "",
            "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20181114/c06c3856bf644ae066d9c993524e0ce4.gif"
          }
        ],
        "product_list": [
          {
            "goods_id": "19437",
            "market_price": "3899.00",
            "goods_name": "Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机",
            "goods_jingle": "Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机",
            "goods_price": "3861.67",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg",
            "url": "http://www.helibuy.cn/mall/c-19437.html"
          },
          {
            "goods_id": "19429",
            "market_price": "1999.00",
            "goods_name": "小米5s 全网通 高配版 3GB内存 64GB ROM 银色 移动联通电信4G手机",
            "goods_jingle": "小米5s 全网通 高配版 3GB内存 64GB ROM 银色 移动联通电信4G手机",
            "goods_price": "1999.00",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t3217/99/2978816326/256547/faf98e40/57ea2fbaN71d47509.jpg",
            "url": "http://www.helibuy.cn/mall/c-19429.html"
          },
          {
            "goods_id": "19402",
            "market_price": "2999.00",
            "goods_name": "华为 Mate 9 Pro 6GB+128GB版 琥珀金 移动联通电信4G手机 双卡双待",
            "goods_jingle": "华为 Mate 9 Pro 6GB+128GB版 琥珀金 移动联通电信4G手机 双卡双待",
            "goods_price": "2999.00",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t4081/84/468204173/468873/9b0cca41/584fcc3eNdb0ab94c.jpg",
            "url": "http://www.helibuy.cn/mall/c-19402.html"
          },
          {
            "goods_id": "18382",
            "market_price": "99.00",
            "goods_name": "雷柏（Rapoo）V600 电竞级振动游戏手柄 黑色",
            "goods_jingle": "雷柏（Rapoo）V600 电竞级振动游戏手柄 黑色",
            "goods_price": "97.90",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t2626/356/1093755215/181726/6c3b1c72/57330345N96e33e1f.jpg",
            "url": "http://www.helibuy.cn/mall/c-18382.html"
          },
          {
            "goods_id": "20071",
            "market_price": "129.00",
            "goods_name": "联想(Lenovo)看家宝 智能摄像机 360°手动旋转 高清夜视 无线WIFI网络摄像头 远程监控安防看店看宠物",
            "goods_jingle": "联想(Lenovo)看家宝 智能摄像机 360°手动旋转 高清夜视 无线WIFI网络摄像头 远程监控安防看店看宠物",
            "goods_price": "129.00",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t2611/62/462979195/106437/386da613/57149375N58d2352e.jpg",
            "url": "http://www.helibuy.cn/mall/c-20071.html"
          },
          {
            "goods_id": "19981",
            "market_price": "129.00",
            "goods_name": "小米（MI）小米手环2 智能运动 心率监测 来电提醒 久坐提醒 LED显示屏 时间显示 防水计步器 无感腕带",
            "goods_jingle": "小米（MI）小米手环2 智能运动 心率监测 来电提醒 久坐提醒 LED显示屏 时间显示 防水计步器 无感腕带",
            "goods_price": "129.00",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
            "url": "http://www.helibuy.cn/mall/c-19981.html"
          },
          {
            "goods_id": "19965",
            "market_price": "958.00",
            "goods_name": "Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi白色",
            "goods_jingle": "Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi白色",
            "goods_price": "943.74",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t2764/96/654676624/191212/f1559df2/571ed22fNd620d6e3.jpg",
            "url": "http://www.helibuy.cn/mall/c-19965.html"
          },
          {
            "goods_id": "18099",
            "market_price": "1680.00",
            "goods_name": "铁三角（Audio-technica）ATH-A990Z 艺术监听耳机",
            "goods_jingle": "铁三角（Audio-technica）ATH-A990Z 艺术监听耳机",
            "goods_price": "1534.30",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t3115/354/7025330143/147094/dc576890/58af95e4N1335210f.jpg",
            "url": "http://www.helibuy.cn/mall/c-18099.html"
          }
        ]
      }
    },
    {
      "type": 2,
      "title": "美妆达人",
      "word_key": [
        {
          "name": "运动套装",
          "url": "http://www.helibuy.cn/mall/s-408-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "运动裤",
          "url": "http://www.helibuy.cn/mall/s-409-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "运动背心",
          "url": "http://www.helibuy.cn/mall/s-410-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "训练服",
          "url": "http://www.helibuy.cn/mall/s-411-0-0-0-0-0-0-0-0.html"
        }
      ],
      "data_list": {
        "right": [
          {
            "title": "",
            "smtitle": "",
            "img_url": "http://www.helibuy.cn/data/upload/mall/article/06083979731396265.png",
            "url": "http://www.helibuy.cn/mall/topic-4.html"
          },
          {
            "title": "",
            "smtitle": "",
            "img_url": "http://www.helibuy.cn/data/upload/mall/article/06083980160456612.png",
            "url": "http://www.helibuy.cn/mall/topic-2.html"
          },
          {
            "title": "",
            "smtitle": "",
            "img_url": "http://www.helibuy.cn/data/upload/mall/article/06083979748260343.png",
            "url": "http://www.helibuy.cn/mall/topic-3.html"
          },
          {
            "title": "",
            "smtitle": "",
            "img_url": "http://www.helibuy.cn/data/upload/mall/article/06083978485458869.png",
            "url": "http://www.helibuy.cn/mall/topic-5.html"
          }
        ],
        "left": {
          "title": "",
          "smtitle": "",
          "img_url": "http://www.helibuy.cn/data/upload/mall/article/06083978668261766.png",
          "url": "http://www.helibuy.cn/mall/topic-5.html"
        }
      }
    },
    {
      "type": 4,
      "title": "办公用品",
      "word_key": [
        {
          "name": "婚庆饰品",
          "url": "http://www.helibuy.cn/mall/s-586-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "装饰挂件",
          "url": "http://www.helibuy.cn/mall/s-587-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "时尚饰品",
          "url": "http://www.helibuy.cn/mall/s-588-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "钻石",
          "url": "http://www.helibuy.cn/mall/s-589-0-0-0-0-0-0-0-0.html"
        }
      ],
      "data_list": {
        "right": [
          {
            "goods_id": "16236",
            "market_price": "9.90",
            "goods_name": "齐心（COMIX）时尚办公订书机文具套装12#(订书机+起钉器+订书钉) 颜色随机 办公文具 ED46",
            "goods_jingle": "齐心（COMIX）时尚办公订书机文具套装12#(订书机+起钉器+订书钉) 颜色随机 办公文具 ED46",
            "goods_price": "9.90",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t3307/252/1418311063/187332/43fb20a6/57cd2a01N7ae84baa.jpg",
            "url": "http://www.helibuy.cn/mall/c-16236.html"
          },
          {
            "goods_id": "16052",
            "market_price": "49.00",
            "goods_name": "得力(deli)6卷45mm宽透明封箱胶带打包胶带 150m/卷33194",
            "goods_jingle": "得力(deli)6卷45mm宽透明封箱胶带打包胶带 150m/卷33194",
            "goods_price": "42.72",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t14389/74/1404513161/190252/a73b6a63/5a4f1633Na7fb3d99.jpg",
            "url": "http://www.helibuy.cn/mall/c-16052.html"
          },
          {
            "goods_id": "16004",
            "market_price": "14.80",
            "goods_name": "齐心（COMIX）金属网纹多功能办公笔筒 颜色随机 办公文具B2061",
            "goods_jingle": "齐心（COMIX）金属网纹多功能办公笔筒 颜色随机 办公文具B2061",
            "goods_price": "14.80",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t3796/166/102316066/160927/14eafa48/57ff0377N95127406.jpg",
            "url": "http://www.helibuy.cn/mall/c-16004.html"
          },
          {
            "goods_id": "16042",
            "market_price": "6.00",
            "goods_name": "广博(GuangBo)170mm护手办公型剪刀剪子颜色随机JD8238",
            "goods_jingle": "广博(GuangBo)170mm护手办公型剪刀剪子颜色随机JD8238",
            "goods_price": "6.00",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t6598/228/2472496934/192802/a8652ec/5963285cN13bc58a4.jpg",
            "url": "http://www.helibuy.cn/mall/c-16042.html"
          },
          {
            "goods_id": "16169",
            "market_price": "1.00",
            "goods_name": "三木(SUNWOOD) 6606 9g固体胶/胶棒 办公文具",
            "goods_jingle": "三木(SUNWOOD) 6606 9g固体胶/胶棒 办公文具",
            "goods_price": "0.71",
            "goods_pic": "http://img11.360buyimg.com/n1/g14/M02/11/01/rBEhV1I5ZCUIAAAAAADPR1NiWGIAADVIgGLQdAAAM9f195.jpg",
            "url": "http://www.helibuy.cn/mall/c-16169.html"
          },
          {
            "goods_id": "15889",
            "market_price": "11.90",
            "goods_name": "金隆兴（Glosen）A4透明书写板夹文件夹 PS材质带标尺 透明蓝 C1079",
            "goods_jingle": "金隆兴（Glosen）A4透明书写板夹文件夹 PS材质带标尺 透明蓝 C1079",
            "goods_price": "10.34",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t16945/74/583775611/200474/a0b35760/5a98b65dNccd29eea.jpg",
            "url": "http://www.helibuy.cn/mall/c-15889.html"
          },
          {
            "goods_id": "16498",
            "market_price": "18.00",
            "goods_name": "麦克赛尔（maxell）CD-R MQ系列 48速700M 5片盒装 空白光盘/刻录盘碟片",
            "goods_jingle": "麦克赛尔（maxell）CD-R MQ系列 48速700M 5片盒装 空白光盘/刻录盘碟片",
            "goods_price": "17.33",
            "goods_pic": "http://img11.360buyimg.com/n1/jfs/t997/283/1138375639/119444/c8a0a643/557a5836Nf78122e8.jpg",
            "url": "http://www.helibuy.cn/mall/c-16498.html"
          }
        ],
        "left": {
          "bg_img": "http://www.helibuy.cn/data/upload/mall/article/06083981345768676.jpg",
          "cate_list": [
            {
              "text": "时尚羽绒服",
              "url": "http://www.helibuy.cn/mall/s-506-0-0-0-0-0-0-0-0.html"
            },
            {
              "text": "真皮皮草",
              "url": "http://www.helibuy.cn/mall/s-1005-0-0-0-0-0-0-0-0.html"
            },
            {
              "text": "女装潮流",
              "url": "http://www.helibuy.cn/mall/s-1008-0-0-0-0-0-0-0-0.html"
            },
            {
              "text": "牛仔裤",
              "url": "http://www.helibuy.cn/mall/s-525-0-0-0-0-0-0-0-0.html"
            },
            {
              "text": "连衣裙",
              "url": "http://www.helibuy.cn/mall/s-533-0-0-0-0-0-0-0-0.html"
            },
            {
              "text": "吊带背心",
              "url": "http://www.helibuy.cn/mall/s-532-0-0-0-0-0-0-0-0.html"
            }
          ]
        }
      }
    },
    {
      "type": 3,
      "title": "热卖品牌",
      "word_key": [
        {
          "name": "婚庆饰品",
          "url": "http://www.helibuy.cn/mall/s-586-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "装饰挂件",
          "url": "http://www.helibuy.cn/mall/s-587-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "时尚饰品",
          "url": "http://www.helibuy.cn/mall/s-588-0-0-0-0-0-0-0-0.html"
        },
        {
          "name": "钻石",
          "url": "http://www.helibuy.cn/mall/s-589-0-0-0-0-0-0-0-0.html"
        }
      ],
      "data_list": [
        {
          "brand_id": "",
          "brand_name": "",
          "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20181207/42565b771932ce8538e97be43a23fffb.gif"
        },
        {
          "brand_id": "",
          "brand_name": "",
          "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20181206/3a008e9c4f08f3dbf5909e76bead01d6.jpg"
        },
        {
          "brand_id": "",
          "brand_name": "",
          "brand_pic": "https://img.chinapp.com/uploadfile/Pinpai/2017-05-08/14942163408975.gif"
        },
        {
          "brand_id": "",
          "brand_name": "",
          "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20180930/e3bbda1f0b7ef2164cf31c7e86af70fc.jpg"
        },
        {
          "brand_id": "",
          "brand_name": "",
          "brand_pic": "https://img.chinapp.com/uploadfile/pinpai/original/20180928/2b3bad94b9c445c4dfdaf91682603920.jpg"
        }
      ]
    }
    ]
  }
  var floorOne = [];
  $.each(list.jsonResult, function (index, element) {
    if (element.type == 1) {
      floorOne.push(element);
    }
  });
  $.each(floorOne, function (index, item) {
    var floor_title = `
      <div class="fuli-u-sm-1 fuli-floor-title">${item.title}</div>
      <div class="fuli-u-sm-11">
          <ul class="clearfix fuli-floor-nav">
              <li>
                  热搜词：
              </li>
          </ul>
      </div>
    `
    console.log(item);
    $('#floor').append(floor_title);
    $.each(item.word_key, function (key, element) {
      var floor_nav = `
        <li>
            <a href="${element.url}">${element.name}</a>
        </li>
      `
      $('.fuli-floor-nav').append(floor_nav);
    });
  });
}