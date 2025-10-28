const undo = document.getElementById("undo")
const redo = document.getElementById("redo")

undo.addEventListener("click", onUndo);
redo.addEventListener("click", onRedo);

function onUndo() {
    // console.log(c.getImageData());
    if (pathCount) {
        drawingHistory.pop();
        pathCount--;
        if (pathCount === 0) {
           c.clearRect(0,0,canvas.clientWidth,canvas.height);
        } else {
            c.putImageData(drawingHistory[pathCount - 1], 0, 0);
        }
    }
}

function onRedo() {

}



// c.getImageData(0,0,100,100); it manages every pixel data

// undo means ::the last one is delete
