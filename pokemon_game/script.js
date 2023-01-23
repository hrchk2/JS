/* global $*/
const random = Math.floor( Math.random() * 150 ) +1;
console.log(random);

$(function(){
  $('#btn').on('click',function(){
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + random
    }).done(function(data){
      $('#img').attr("src",data.sprites.front_default);
      const name = data.forms[0].name;
      console.log(name)
    }).fail(function(data){
       alert('通信に失敗しました。');  
    });
  });
});

// $(function checkAnswer(){
//   // ①入力された答えを取得する
//   const input_answer = document.getElementById('answer').value;
//   // ②正解かどうか判定する
//   const name = "Bulbasaur" ;
//   console.log(name);
//   console.log(input_answer);
  
//   if (input_answer === name) {
//     $('#judge').text('maru');
//   } else {
//     $('#judge').text('batu');
//   }
// });

function checkAnswer(){
  $('#form').submit(function() {
    const input_answer = document.getElementById('answer').value;
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + random
    }).done(function(data){
      const name = data.forms[0].name;
      if(input_answer == name ){
        $('#judge').text('正解');
      }else{
        $('#judge').text('不正解');
      }
    });
    return false;
  });
}