// Creating multiple circles using object oriented JS


var canvas = document.querySelector("canvas");

winHeight = window.innerHeight-2
winWidth = window.innerWidth-2 
canvas.width = winWidth;
canvas.height = winHeight;

var c = canvas.getContext('2d')


//Creating a JS Object, make a function with a name starting off with a capital letter
function Circle(x, y, dx, dy, radius){
    //To give each circle it's own x and y value
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    //The circle will be drawn whenever this is called
    this.draw = function(){
        c.beginPath();
        c.strokeStyle = "pink"
        c.arc(this.x, this.y, 30, 0, 2*Math.PI, false);
        c.stroke()
    }
    //Make sure to use this to ensure that the circle variables are referenced instead o fother random variables
    this.update = function(){
        if (this.x >= winWidth-radius || this.x <= radius)
            {
                this.dx*=-1
            }
    
            if (this.y >= winHeight-radius || this.y <= radius)
            {
                this.dy*=-1
            }
    
            this.x+=this.dx;
            this.y+=this.dy;
            
            this.draw();
    }
}



//JS Array
circleArray = []

for(var i  = 0; i != 100; ++i){

    var radius = 30
    // Math.random() generates a number b/w 0 and 1
    var x = Math.random()*(winWidth - radius*2) + radius;
    var y = Math.random()*(winHeigh - radius*2) + radiust;
    var dx = (Math.random()-0.5)*4
    var dy = (Math.random()-0.5)*4

    //Instantiating an object in JS
    circleArray.push(new Circle(x, y, dx, dy, radius));

    console.log(circleArray[i]);
}

function animate() {
    requestAnimationFrame(animate);
    //This will create a loop for us
    //circle
    c.clearRect(0, 0 ,winWidth, winHeight);
    for (var i = 0; i != circleArray.length; ++i){
            //The new function circle
            circleArray[i].update();
    }
}


animate();