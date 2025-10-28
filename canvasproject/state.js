const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
const actionButtons = document.querySelectorAll("#actionbuttons > .btn"); 

const form = document.querySelector(".form")

const formState = {
    strokeWidth: 3,
    strokeStyle: "black"
}

const actions = {
    freehand: false,
    rectangle: false,
    earaser: false,
    circle: false
}


function onmousedown(e) {
    previousPosition = [e.clientX, e.clientY];
    //   c.stroke();
    c.strokeStyle = drawingColor;
    c.lineWidth = 2;
    initialCount = pathCount;
    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mouseup", onmouseup);
}

function toggleMenu() {
    form.classList.toggle("hide");
}

function onInput(element) {
    const newValue = element.value;
    if (element.name7 === "strokeWidth")
        formState[element.name] = parseInt(newValue);//all the inputs by default string so its converts string to integer
    else
        formState[element.name] = newValue;
    console.log(formState)
}

function onActionClick(element) {
    // console.log(element)
    const actionName =element.id;
    actionButtons.forEach(btn =>{
        if(btn.classList.contains("active")&&btn.id !==actionName){
        btn.classList.remove("active");
        } 
    })
    actionButtons
    element.classList.toggle("active");
    actionButtons.forEach(btn =>{
        const isActive = btn.classList.contains("active")
        actions[btn.id] = isActive;
    })
    // console.log(actionName);
    console.log(actions);

}