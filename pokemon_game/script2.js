/* global $*/

$(function(){
  $('#btn').click(function(){
    const random = Math.floor( Math.random() * 151 ) +1;
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


// 以下練習。アプリに関係なし。

// let i = Math.floor( Math.random() * 11 ) +1;
// while(i != 11){
//   i = Math.floor( Math.random() * 11 ) +1;
//   console.log(i)
// }

// do {
//     var count = Math.floor( Math.random() * 10 ) +1;
//     console.log(count);
// } while(count < 10 );

// while練習

// var count = 1;
// var dice ;
// dice = Math.floor(Math.random() * 6) + 1;
// while (dice != 6) { // （2）
//   count++;          // （3）
//   dice = Math.floor(Math.random() * 6) + 1; // （4）
// }
// alert(count);   // （5）

// do while 練習

// let i ;
// do {
//   i = Math.floor(Math.random() * 6) + 1;
//   console.log(i)
// } while (i != 6);

// for文;
// for (let i = 1; i <= 4; i++) {
// 　console.log(i);
// }