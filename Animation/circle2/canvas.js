var canvas = document.querySelector("canvas");

winHeight = window.innerHeight-2
winWidth = window.innerWidth-2 
canvas.width = winWidth;
canvas.height = winHeight;

var c = canvas.getContext('2d')

var radius = 30
// Math.random() generates a number b/w 0 and 1
var x = Math.random()*winWidth;
var y = Math.random()*winHeight;
var dx = (Math.random()-0.5)*4
var dy = (Math.random()-0.5)*4
console.log(x, y, dx, dy);
function animate() {
    requestAnimationFrame(animate);
    //This will create a loop for us
    //circle
    c.clearRect(0, 0 ,winWidth, winHeight);
    c.beginPath();
    c.strokeStyle = "pink"
    c.arc(x, y, radius, 0, 2*Math.PI, false);
    c.stroke()

    if (x >= winWidth-radius || x <= radius)
    {
        dx*=-1
    }

    if (y >= winHeight-radius || y <= radius)
    {
        dy*=-1
    }

    x+=dx;
    y+=dy;
}


animate();