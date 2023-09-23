// Creating multiple circles using object oriented JS
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var canvas = document.querySelector("canvas");

function setWindow(){
    winHeight = window.innerHeight-2
    winWidth = window.innerWidth-2 
    canvas.width = winWidth;
    canvas.height = winHeight;
}
setWindow()

var minRadius = 7;
var maxRadius = 40;
var colorArray = [
    '#ffaaff',
    '#faaaaa',
    '#123456',
    '#134569'
]

var c = canvas.getContext('2d')

var mouse = {
    x : undefined,
    y : undefined
}


//Creating an event listener
window.addEventListener('mousemove', function(event) { //this anonymous function aalways has an event argument
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(event){
    setWindow();

    init();
})

//Creating a JS Object, make a function with a name starting off with a capital letter
function Circle(x, y, dx, dy, radius){
    //To give each circle it's own x and y value
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)]
    this.minRadius = radius;

    //The circle will be drawn whenever this is called
    this.draw = function(){ 
        c.beginPath();
        // c.strokeStyle = "pink"
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        c.fillStyle = this.color;
        // c.stroke()
        c.fill()
    }
    //Make sure to use this to ensure that the circle variables are referenced instead of other random variables
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
        //Interactivity
        if ((Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < maxRadius) && this.radius <= 40) 
        {
            this.radius += 1;
        }
        else if(this.radius>= this.minRadius)
        {
            this.radius -= 1;
        }
        this.draw();
    }
}


function init() {
    //JS Array
    circleArray = [] //Variables declared wihtout var become global variables

    for(var i  = 0; i != 1000; ++i){

        var radius = Math.random()*3+1;
        // Math.random() generates a number b/w 0 and 1
        var x = Math.random()*(winWidth - radius*2) + radius;
        var y = Math.random()*(winHeight - radius*2) + radius;
        var dx = (Math.random()-0.5)*4
        var dy = (Math.random()-0.5)*4

        //Instantiating an object in JS
        circleArray.push(new Circle(x, y, dx, dy, radius));


    }
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

init();
animate();