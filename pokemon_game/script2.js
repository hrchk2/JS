/* global $*/

$(function(){
  $('#btn').click(function(){
    const random = Math.floor( Math.random() * 150 ) +1;
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + random
    }).done(function(data){
      $('#img').attr("src",data.sprites.front_default);
      const name = data.forms[0].name;
      console.log(name)
      $('#submit').click(function (){
        function checkAnswer(){
          const input_answer = document.getElementById('answer').value;
          if(input_answer == name ){
              $('#judge').text('正解');
          }else{
              $('#judge').text('不正解');
          }
        };
        checkAnswer();
        return false;
        });
    }).fail(function(data){
       alert('通信に失敗しました。');
    });
   });
});