/* global $*/
const random = Math.floor( Math.random() * 150 ) +1;
console.log(random);

$(function(){
  $('#btn').on('click',function(){
    // const random = Math.floor( Math.random() * 150 ) +1;
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



// $(function(){
//   function aaa(){
//     alert('aaa');
//   }
//   $('#btn2').click(function(){
//     aaa();
//   });
// });

// let www = Math.floor( Math.random() * 150 ) +1;

// function aaa(){
//   $('#btn2').on('click',function (){
//     const int = Math.floor( Math.random() * 150 ) +1;
//   })
// }

// ボタンクリック時に変数intを代入し、数字を当てるゲーム
$(function(){
  $('#btn2').click(function(){
    const int = Math.floor( Math.random() * 151 ) +1;
    console.log(int);
    $('#submit_2').click(function (){
      function checkAnswer2(){
        const input_answer2 = document.getElementById('answer2').value;
        if(input_answer2 == int){
            $('#judge2').text('正解');
        }else{
            $('#judge2').text('不正解');
        }
      };
      checkAnswer2();
      return false;
      });
   });
});

// switch文練習

$(function() {
  $('#omikuji_btn').click(function(){
    const omikuji =Math.floor( Math.random() * 13 );
    console.log(omikuji)
    switch (omikuji) {
      case 0:
        $('#result').text("大吉");
      break;

      case 1:
        $('#result').text("中吉");
      break;

      case 2:
        $('#result').text("小吉");
      break;

      case 3:
        $('#result').text("吉");
      break;

      case 4:
        $('#result').text("半吉");
      break;

      case 5:
        $('#result').text("末吉");
      break;

      case 6:
        $('#result').text("末小吉");
      break;

      case 7:
        $('#result').text("凶");
      break;

      case 8:
        $('#result').text("小凶");
      break;

      case 9:
        $('#result').text("半凶");
      break;

      case 10 :
        $('#result').text("末凶");
      break;

      default:
        $('#result').text("大凶");
      break;
    }
  })
})

// const introduce = function(){
//   console.log("こんにちわ");
//   console.log("私はにんじゃわんこです");
// };

// introduce();

// const abc = () => {
//   console.log("abc");
// };

// abc();

// function text(){
//   console.log("text");
// }

// text();

// コールバック関数　勉強-------------------------------

// const introduce = function (a){
//   a("a",14);
// };

// introduce((name,age)=>{
//   console.log(`${name}は${age}です。`);
// });

// const test = function(num,num2){
//   console.log(`${num}`);
//   console.log(num2);
// };

// test(4,2);



// --------------------------------------------------------------
// const test = function(num){
//   num(1,1);
// };

// test(function(num1,num2){
//   console.log(num1);
//   console.log(num2);
// });



// ----------------------------------------------------
// const num = (function(num1,num2){
//   console.log(num1);
//   console.log(num2);
// })

// num(2,2);

// 関数内の変数を関数外で使う方法--------------------------
// function nameFn() {
//   let firstName = "Taro";
//   let lastName = "Yamada";
//   return {
//     firstName,
//     lastName,
//   };
// }
// console.log(nameFn().firstName); // -> Taro
// console.log(nameFn().lastName); // -> Yamada

// 無名関数の場合
// const nameInfo = function () {
//   let firstName = "Taro";
//   let lastName = "Yamada";
//   return {
//     firstName,
//     lastName,
//   };
// };
// console.log(nameInfo().firstName); // -> Taro
// console.log(nameInfo().lastName); // -> Yamada