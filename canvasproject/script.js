//legenda 
// 1.making a free hand drawings.and some shapes as well


const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// firstly for drawing a line

// first we need to begin the path

const c = canvas.getContext("2d");
 c.beginPath();
c.moveTo(200,300);
c.lineTo(400,100);
c.strokeStyle="red";
c.lineWidth="10";
c.globalAlpha=0.2;
c.stroke();//static function draws the line with black clor from p1 to p2
c.closePath();
 

// hard coded lines

function multplelines(p1,p2,color,thickness){
   c.beginPath();
   c.moveTo(p1.x,p1.y);
   c.lineTo(p1.x,p2.y);
   c.strokeStyle = color;
   c.lineWidth = thickness;
   c.stroke();
   c.closePath();

}
multplelines({x:100,y:50},{x:90,y:200},"red",1);
multplelines({x:10,y:950},{x:900,y:209},"red",1); 

// dynamic code 

function onMouseDown(event) {
    console.log(event);
    let { clientX:x, clientY:y} = event;
    c.beginPath();
    c.moveTo(x, y);
    c.lineWidth = 2;
    c.strokeStyle = "blue";
}

function onMouseUp(event) {
    let { clientX, clientY } = event;
    console.log(clientX, clientY);
    c.lineTo(clientX, clientY);
    c.stroke();
    c.closePath();
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);



// CanvasRenderingContext2D object.
// these are methods execpt strokeStyle lineWidth because these two properties for stroke we have to set for values .
// continues lines.

c.beginPath();
c.strokeStyle="red";
c.lineWidth = 3;
c.moveTo(100,200);
c.lineTo(300,100);
c.stroke();
c.closePath();
c.beginPath();
c.moveTo(300,100);
c.lineTo(20,20);
c.lineWidth = 2;
c.strokeStyle = "green";
c.stroke();


//free hand drawing
canvas.addEventListener("mousedown",onMouseDown);
let previousPosition = null;


function onMouseDown(event){
    console.log("mouse down");
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp)

}
function onMouseMove(event){
    console.log("mousemove")
}
function onMouseUp(){
    console.log("mouseup");
    canvas.addEventListener("mousemove",onMouseMove);
}




