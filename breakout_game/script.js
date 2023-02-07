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

function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
setInterval(draw, 10);