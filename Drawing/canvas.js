var canvas = document.querySelector("canvas");

winHeight = window.innerWidth-2 

canvas.width = winHeight;
canvas.height = window.innerHeight-2;

var c = canvas.getContext('2d')

c.fillStyle = "rgba(255, 0,  0, 0.55)"
c.fillRect(100, 100, 100, 100)

c.fillStyle = "blue"
c.fillRect(300, 100, 100, 100)
//x, y is top left corner
//Line

c.beginPath();
c.moveTo(50, 300)
c.lineTo(300, 300)
c.strokeStyle = "#f00"
c.stroke();

//circle
// c.beginPath();
// c.strokeStyle = "pink"
// c.arc(400, 400, 30, 0, 2*Math.PI, false);
// c.stroke()

for (var j = 0; j != 5; ++j)
    for(var i = 0; i != 5; ++i)
    {
        c.beginPath();
        c.strokeStyle = `#f00`
        c.arc(430+30*i, 400+45*j, 30, 0, 2*Math.PI, false);
        c.stroke()
    }

console.log(canvas);