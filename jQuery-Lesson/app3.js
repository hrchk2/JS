$(function(){
  $('button').on('click', function(){
    $('ul').children().css({
      'color':'red',
      'font-size':'60px'
      });
  });
});

$(function(){
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
    },'slow');
    event.preventDefault();
  });
});