
// // second time 
// //making a free hand drawing and some shapes as well

// // canvas has exclusively one method that is getcontext for this get context 

// const canvas = document.getElementById("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const c = canvas.getContext("2d");
// /* c.beginPath();
// c.moveTo(200,300);
// c.lineTo (400,100);
// c.strokeStyle = "blue";
// c.lineWidth = 2 ;
// c.globalAlpha = 1;
// c.stroke();
// c.closePath() */


// //multiple lines
// /* 
// function drawline(p1,p2,color, thickness){
//  c.beginPath();
// c.moveTo(p1.x,p1.y);
// c.lineTo (p2.x,p2.y);
// c.strokeStyle = color;
// c.lineWidth = thickness;
// // c.global 
// c.stroke();
// c.closePath()
// }
// drawline({x:100,y:50},{x:90,y:200},"violet",3)
// drawline({x:50,y:150},{x:300,y:40},"green",10)
// drawline({x:500,y:500},{x:600,y:600},"blue",4) */


// // dynamic

// //default parameter function
// /* function call(x,y=90){
//     console.log(x,y);
// }
// call(3) */

// // user is able to make a draw on the canvas by using mouse :mouseup,mousedown whwerever we want .
// // mousedown means:start the mouse 
// // mouseup:end the mouse
// // you’re trying to draw a line on a <canvas> by clicking(mousedown) and releasing(mouseup) the mouse.

// /* function onmousedown(event){
//     // let positon = event.clientX,clientY;
//     let {clientX,clientY}=event;
//     // {clientX,clientY} is position where use makes the mouse down
//     c.beginPath();
//     c.moveTo(clientX,clientY);//starts the line at this position
//     c.lineWidth=5;
//     c.strokeStyle = "blue";
    
// }


// function onmouseup(event){
//     // let positon = event.clientX,clientY;
//     let {clientX,clientY}=event;
//     c.lineTo(clientX,clientY);
//     c.stroke();
//     c.closePath();
// }


// canvas.addEventListener("mousedown",onmousedown);
// canvas.addEventListener("mouseup",onmouseup); */


// // continuous lines

// /* c.beginPath();
// c.strokeStyle="red";
// c.moveTo(100,100);
// c.lineTo(300,100);
// c.lineWidth = 10;
// c.stroke();
// c.lineTo(350,300);
// c.strokeStyle="blue"
// c.stroke(); */

// /* c.beginPath();
// c.strokeStyle="red";
// c.moveTo(100,100);
// c.lineTo(300,100);
// c.lineWidth = 10;
// c.stroke();
// c.beginPath();
// c.moveTo(300,100)
// c.lineTo(350,300);
// c.strokeStyle="blue";
// c.lineWidth=2
// c.stroke(); */


// // mousemove
// // its like continuosly calling function
// // canvas.addEventListener("mousemove",(e)=>{
// //     console.log(e.clientX,e.clientY); 
// // })


// // free hand drawing

// // mousemove event mousedown event start atyna tharuvaatha trigger avvaaali and mousup ener avvagaane stop.and after remove mousemove only mosedown tharuvaatha mosemove and mouseup no mosemovmove.
// // we need to remove mouse move listner after mouseup

// /* canvas.addEventListener("mousedown",onmousedown)
let previousvalue = null;
function onmousedown(){
    console.log("mouse down");
    canvas.addEventListener("mousemove",onmousemove);
    canvas.addEventListener("mouseup",onmouseup);
}
function onmousemove(){
    console.log("mousemove")
}
function onmouseup(){
    console.log("mouse up");
    // we need to remove mouse move listner after mouseup
    canvas.removeEventListener("mousemove",onmousemove)

} 

// // you guys can see positions actually for events when triggring 
   canvas.addEventListener("mousedown",onmousedown)
// let previousvalue = null;
function onmousedown(e){
  console.log("mouse down" , e.clientX,e.clientY);
  canvas.addEventListener("mousemove",onmousemove);
  canvas.addEventListener("mouseup",onmouseup);
}
function onmousemove(e){
  console.log("mousemove" , e.clientX,e.clientY)
}
function onmouseup(e){
  console.log("mouse up", e.clientX,e.clientY);
    canvas.removeEventListener("mousemove",onmousemove)
}

// free hand now
//for the first time  inide this previous position 
 canvas.addEventListener("mousedown",onmousedown)
let pathCount = 0;
let drawingHistory = [];

let drawingColor = "red";
let previousPosition = null;
const arr = [];
let initialCount = 0;

let optitions = {
    isFreeHandDrawing: true,
    isRectangleDrawing: false,
}


function enableRectDrawing() {
 optitions.isFreeHandDrawing = false;
    optitions.isRectangleDrawing = true;
    console.log(optitions);
  let optitions = {
 isFreeHandDrawing: false,
    isRectangleDrawing: true,
}
    
     console.log(optitions);
 }

function onmousedown(e) {
    previousPosition = [e.clientX, e.clientY];
c.stroke();
    c.strokeStyle = drawingColor;
    c.lineWidth = 2;
    initialCount = pathCount;
    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mouseup", onmouseup);
}
function onmousemove(e) {
    let currentposition = [e.clientX, e.clientY]
    if (optitions.isFreeHandDrawing) {
        c.beginPath();
        c.moveTo(...previousPosition);
        c.lineTo(...currentposition);
       c.strokeStyle="blue";
        c.stroke();
        c.closePath();
        previousPosition =  currentposition;
    }
 drawRectangle();

    if (optitions.isRectangleDrawing) {
        drawRectangle(currentposition);
    }


}
function drawRectangle(currentposition) {
    if (initialCount !== pathCount) {
        c.putImageData(drawingHistory[initialCount - 1],0,0);
        pathCount = initialCount;
    }
    let width = currentposition[0] - previousPosition[0];
    let height = currentposition[1] - previousPosition[1];
    c.strokeRect(previousPosition[0], previousPosition[1], width, height);
    drawingHistory.push(c.getImageData(0, 0, canvas.width, canvas.height));
    pathCount++;
} 
 function onmouseup(e){
    console.log("mouse up", e.clientX,e.clientY);
       canvas.removeEventListener("mousemove",onmousemove)


 }


// firstly i made a click mousedown and then drawn something mouseup so when i made a click
//  i added a two event listenrs 1.mousemove and 2.mouseup.events



function onmouseup(e) {
    // console.log("mouse up", e.clientX,e.clientY);
    canvas.removeEventListener("mousemove", onmousemove);
    canvas.removeEventListener("mouseup", onmouseup);
    drawingHistory.push(c.getImageData(0, 0, canvas.width, canvas.height));
    pathCount++;
}


