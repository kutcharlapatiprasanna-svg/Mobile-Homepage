//the callback function f will called whenever event occurs.

// addEventListener and removeEventListener

const button = document.getElementById("test");
const f1 = (a,b)=>{
    console.log("something");
   

}
const f2 = (a,b)=>{
    console.log("something two");
   }
   button.addEventListener("click",f1);
button.addEventListener("click",f2);

function x(){
    button.removeEventListener("click",f1);
    console.log("removed f1 function");
}

//removeEventListener


