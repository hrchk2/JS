const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 赤い四角を表示
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// 緑の丸を表示
// ctx.beginPath();
// ctx.arc(240, 160, 10, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// 青枠の四角を表示
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

// 丸を移動させる
let x = canvas.width / 2;
let y = canvas.height -30; // y軸が-になるのはキャンバスy軸は下方向に+になるため。詳しくは、mdn「キャンバスでの図形の描画」を見る。
let dx = 2;
let dy = -2;
const ballRadius = 10; // ボールの半径の定数

// パドルの設定
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if (e.key === "Right" || e.key === "ArrowRight"){
    rightPressed = true ;
  }else if (e.key === "Left" || e.key === "ArrowLeft"){
    leftPressed = true ;
  }
}

function keyUpHandler(e){
  if (e.key === "Right" || e.key === "ArrowRight"){
    rightPressed = false ;
  }else if (e.key === "Left" || e.key === "ArrowLeft"){
    leftPressed = false ;
  }
}


// ボールの描画
function drawBall(){
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,Math.PI*2);
  ctx.fillStyle = "#009500";
  ctx.fill();
  ctx.closePath();
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;

  if (x + dx > canvas.width-ballRadius ||x+ dx < ballRadius){
    dx = -dx ;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > canvas.height - ballRadius){
    if(x > paddleX && x < paddleX + paddleWidth){
      dy = -dy;
    }
    else{
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
    }
  }
  
  if (rightPressed) {
    paddleX = Math.min(paddleX + 4,canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 4,0);
  }
}

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX,canvas.height - paddleHeight,paddleWidth,paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

const interval = setInterval(draw, 10);
