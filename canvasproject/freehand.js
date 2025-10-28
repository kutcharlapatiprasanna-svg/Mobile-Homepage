const pencil = document.getElementById("pencil");
let isPencilActive = false //initially the pencil is inactive

//  const colorPicker = document.getElementById("color-picker")

//  colorPicker.addEventListener("change",()=>{
//    drawingColor = colorPicker.value ;
//  })

function onpencilclick(){
    pencil.classList.toggle("active");
    isPencilActive=!isPencilActive; //enabling the drawing
    //ispencilActive = !false = true;
    if(isPencilActive){
        // console.log(coloPicker.value)
        // drawingColor=coloPicker.value ;
         canvas.style.cursor="crosshair";
        canvas.addEventListener("mousedown",onmousedown);
    }
    else{
        canvas.style.cursor="auto";
         canvas.removeEventListener("mousedown",onmousedown)
    }
}



pencil.addEventListener("click",onpencilclick);

//toggle means ::if class name is active you have to remove othrwise add

// !false: not of false means the opposite of false, which is true
// ! → means NOT (logical negation operator).

// false → means something that is not true.

// !false → means not false, which becomes true.