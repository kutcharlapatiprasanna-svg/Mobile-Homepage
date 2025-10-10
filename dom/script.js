// 1.manupulating of an existing code

// function action(){
//     const input = document.getElementById("rollnumber");
//     input.type="number";
// }
//delete
function action(){
    const bold = document.querySelector("#container>.child>b");
    bold.remove();
    
    const div = document.querySelector("#container>.child");
    div.remove();
} 




//creating elemenet
function action() {
    //first we need to create a fresh element
let para = document.createElement("p");
// console.log(para);
para.innerText="inner text";
let para2 = document.createElement("p");
para2.innerText = "inner text two";

const parent = document.querySelector(".child");
//   parent.appendChild(para);
parent.append(para,para2);
//   const parent = document.querySelector(".child");
//   parent2.appendChild(para2);

    
}



function action(){
    let elemnt = document.createElement("p");
    elemnt.innerText = "prasanna";
    let parent = document.querySelector(".child");
    let bold = document.querySelector(".child>bold");

    // let span = document.querySelector(".child>span");
    
    parent.insertBefore(elemnt,bold);
}


    // i just want to put befor body to div

   let create = document.createElement("div");
  create.innerText = "Riaz's text";

//   let parent = document.querySelector("body")[0];
let body = document.body;
let element = document.getElementById("container") ;
body.insertBefore(create,element);





// events:actions taken by users on the web page.










