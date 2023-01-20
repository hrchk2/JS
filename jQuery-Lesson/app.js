$(document).ready(function () {
  $('.text').html('<h1>Hello jQuery!!</h1>');
});

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

$(function(){
  $('.box2').fadeIn(1000);
});

$(function(){
  $('.box3').mouseover(function(){
    $('.box3').css({
      'background-color':'#0000FF'
    });
  });
  $('.box3').mouseout(function(){
    $('.box3').css({
      'background-color':'#FF0000'
    });
  });
});


$(function() {
  $('.box4').mouseover(function(){
    $('.box4').addClass('box4-ext');
  });
  $('.box4').mouseout(function(){
    $('.box4').removeClass('box4-ext');
  });
});


$(function() {
  $('.box5').on('click',function(){
    $('.box5').addClass('box5-ext').on('click',function(){
        $('.box5').removeClass('box5-ext');
    });
  });
});

// 連続クリック防止フラグ
let clickFlg = true;
$(function() {
  $(".box6").on("click", function() {
    if(clickFlg) {
    // イベント処理中はフラグをoffにします。
      clickFlg = false;
      $('.box6').addClass('box6-ext');
      // クリック処理を実施
    } else {
      clickFlg = true;
      $('.box6').removeClass('box6-ext');
    // イベント処理中は処理しない
    return false;
    }
  });
});