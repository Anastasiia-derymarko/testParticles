var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height  = 200;
 
ctx.strokeStyle = "#aee1eb";
var posY1 = canvas.height;
var posY2 = 80;
var posY3 = 10;
var posX1 = 200;
var lineHeight2 = 1;
var lineHeight1 = 1;
var speed1 = 0.1;
var speed = 0.1;
var speed2 = 0.1;
var speedX1 = 0.1;

function drawLine() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(posX1+lineHeight2, posY1+lineHeight1);
  ctx.lineTo(canvas.width*0.61, posY2+lineHeight1);
  ctx.lineTo(canvas.width*0.71, posY3+lineHeight1);
  ctx.lineTo(canvas.width, 70);
  ctx.stroke();
}

function moveLine () {
    posY1 += speed1;
    posY2 += speed;
    posY3 += speed2;
    posX1 += speedX1;
  
  if (posY1 < 20 || posY1 > canvas.height) {
      speed1 = speed1 * -1;
  }

  if (posY2 < 20 || posY2 > 100) {
      speed = speed * -1;
  }

  if (posY3 < 10 || posY3 > 50) {
      speed2 = speed2 * -1;
  }
  if (posX1 < 100 || posX1 > 300) {
      speedX1 = speedX1 * -1;
  }
// console.log(posY2);
}

function loop() {
    // clear old frame;
  ctx.clearRect(0,0,canvas.width, canvas.height);

  moveLine();
  drawLine();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);