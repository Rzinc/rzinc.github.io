var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth-2;
canvas.height = window.innerHeight-2;

var c = canvas.getContext('2d')

c.fillRect(100, 100, 100, 100)

console.log(canvas);