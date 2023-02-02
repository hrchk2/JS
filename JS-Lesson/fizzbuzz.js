function fizzbuzz(){
  // ここで定数constにするとwhileで書き換えできないためエラーになる。
  let message = prompt('数字を入力してください');
  while(message == '' ){
    message = prompt('再度数字を入力してください。');
    console.log(message);
  }
  
  if(message == null){
    alert('入力して!');
  }else if(message % 15 === 0){
    alert('FizzBuzz');
  }else if(message % 3 === 0){
    alert('Fizz');
  }else if(message % 5 === 0) {
    alert('Buzz');
  }else{
    alert('やり直し！');
  }
}

fizzbuzz();