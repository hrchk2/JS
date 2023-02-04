const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 赤い四角を表示
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// 緑の丸を表示
ctx.beginPath();
ctx.arc(240, 160, 10, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// 青枠の四角を表示
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();