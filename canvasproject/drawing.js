/* Exact Goal of Your Code

To allow the user to draw freehand lines on an HTML <canvas> using the mouse — starting when the mouse button is pressed, drawing while it moves, and stopping when it’s released.

In Detail
 1. mousedown

When the user presses the mouse button,

It saves the starting point (where drawing should begin).

It sets up the canvas with stroke color and line width.

It activates two temporary event listeners:

mousemove → for drawing

mouseup → for stopping

So this marks the start of a drawing action.

✏️ 2. mousemove

While the mouse button is held down and moving,

It keeps calling drawFreehand()

Each call connects the previous point and current point with a line

That makes it look like a continuous freehand stroke

So this part is the actual drawing motion.

🛑 3. mouseup

When the user releases the mouse,

It removes the mousemove and mouseup listeners

This means the drawing stops immediately

So no new lines are drawn until you press down again

So this marks the end of one drawing stroke.

🔄 In simple words

The goal =

“Create a mini drawing tool that tracks mouse press, movement, and release to draw freehand lines smoothly on the canvas.” */



let initialPosition = null;
const history = [];
let historyIndex = -1;

function onmousedown(e) {
    if (!(actions.circle || actions.eraser || actions.freehand || actions.rectangle)) {
        return;
    }
    initialPosition = { x: e.clientX, y: e.clientY };
    startIndex = history.length - 1;
    //    c.beginPath();
    c.strokeStyle = formState.strokeStyle;
    c.lineWidth = formState.strokeWidth;

    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mouseup", onmouseup);
}

function onmousemove(e) {
    let currentposition = { x: e.clientX, y: e.clientY }
    if (actions.freehand) { //if freehand is active call drawfreehand();
        drawFreehand(currentposition);

    }
    else if (actions.eraser) {
        eraserhandle(currentposition);
    }
    else if (actions.circle) {
        circleHanadling(currentposition);
    }
    else if(actions.rectangle){
        drawRectangle(currentposition);
    }
}

function onmouseup() {
    //cleanup
    history.push(c.getImageData(0, 0, canvas.width, canvas.height))
    historyIndex++;
    canvas.removeEventListener("mousemove", onmousemove);
    canvas.removeEventListener("mouseup", onmouseup);
}

canvas.addEventListener("mousedown", onmousedown);

function drawFreehand(currentposition) { //from initial point to current position i need to draw a line
    c.beginPath();
    c.moveTo(initialPosition.x, initialPosition.y);
    c.lineTo(currentposition.x, currentposition.y);
    c.lineCap = "round";
    c.lineJoin = "round";
    c.stroke();
    c.closePath();
    initialPosition = currentposition;

}



function eraserhandle(currentposition) {
    c.clearRect(currentposition.x, currentposition.y, 10, 10)
}


function circleHanadling(currentposition) {
    if (startIndex !== -1) {
        //we have some drawings before we start the circle drawing.
        c.putImageData(history[startIndex], 0, 0);
    }
    else {
        //if i do not have drawings before we start circle drwaing
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
    c.beginPath();
    const radius = Math.sqrt(
        (currentposition.x - initialPosition.x) ** 2 + 
        (currentposition.y - initialPosition.y) ** 2
    );
    c.arc(initialPosition.x,initialPosition.y,radius,0,2*Math.PI,true);
    c.stroke();
    history.push(c.getImageData(0,0,canvas.width,canvas.height))

}


function drawRectangle(currentposition){
    if (startIndex !== -1) {
        //we have some drawings before we start the circle drawing.
        c.putImageData(history[startIndex], 0, 0);
    }
    else {
        //if i do not have drawings before we start circle drwaing
        c.clearRect(0, 0, canvas.width, canvas.height);
    } 
    c.beginPath();
    let width = currentposition.x - initialPosition.x;
    let height = currentposition.y-initialPosition.y;
    c.strokeRect(initialPosition.x,initialPosition.y,width,height);

}