/* Execution flow of a javascript code . 
1.global line 
2.local line:if a line of code present inside the function then thats called as local statemenrt.  */
 

let a = 20;//global line
function callme(x,y){//global line
    // let a = 10;//local
    console.log(x + y + a);//70 local line
}
callme(a,2*a);//20,40 this is going to x=20,y=40; global line


// callstack  and heap 

/* scopes are three types::
1.global scope
2.local scope.
3.block scope.  */


// 1.global scope // outside the function 
var x = 10;
console.log(x);

//2.local scope.
function ant(){
    let y = 40;
    var z = 20;
    console.log(y);
    console.log("inside a function",x);
}
ant();
// console.log(z);

//3.block scope   (it is nothing but brackets{},any conditional ,loops). 
// var is function-scoped, not block-scoped.
if(true){
    let a = 60;
    let b = 50;
    var x = 20;
    console.log(b);
    // console.log(x);
}
// console.log(a);

//  console.log(a);


// object

// some object array assignment questions

// let colors ={ 
//     red: "naresh", 
//     green: "prasanna", 
//     white: "yash"
//  };
// function hasKey(key){
//     for(let i in colors){
//         if(i===key){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(hasKey("red"));



// let colors1 ={ 
//     1: "naresh", 
//     2: "prasanna", 
//     3: "yash"
//  };
//  for(let key in colors1){
//     console.log(key);
//     // console.log(colors1[3]);
//     // console.log(colors1[2]);
//  }  


// no of numberofBooks
//  let objects = [
//     {
//     author:"prasanna",
//     title:"hey this is pras",
//     readingStatus:true,
//     },

//     {
//     author:"prasanna2",
//     title:"hey this is prasa",
//     readingStatus:true,
//     },

//     {
//     author:"prasanna3",
//     title:"hey this is prasanna",
//     readingStatus:true,
//     },
// ];

// let numberofBooks = 0;
// objects.forEach((book) => {
//     if(book.readingStatus)
//        numberofBooks++;
    
// });
// console.log(numberofBooks);



// decimal to binary


/* this
console.log(window);


Regular functions inside objects → this points to the object that called them.

Arrow functions inside objects → this comes from where the function was created, which in this case is outside the object, i.e., the top-level scope. */
// let lap1={
//     source:"vzm",
//     destination:"alluvanivalasa",
//     name:"prasanna",
//     age:21,
//     id:55,
//     greet:() =>{
//         console.log(this.id);
//     }
    
// };
// lap1.greet();