// // data types

let x = 30;
console.log(x);
let y = 34.8;
console.log(y);

ley b = `hello prasanna` / 5;
console.log(b);

let big = 28973759816426301642424n;
console.log(big);
console.log(typeof big);

let big1 = 2897375981642630164242434n;
console.log(typeof big1);
let big2 = 973759816426301642424535;
console.log(typeof big2);


// // null

let user1 = null;
console.log(user1);
console.log(typeof user1);

// //boolean
let x = "prasanna";
console.log(Boolean("prasanna"));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean([]));


// // let x;
console.log(x);

function prasanna() {

}
console.log((prasanna()));

let obj = {};
console.log(obj.property);


// // object

let obj = {
    name: "prasanna",
    age: 22,
    job: "devoloper"

};
let obj = new Object();
obj.name = "prasanna";..... object creation
console.log(obj);
console.log(obj.name);

obj.name = "yashwanth";
console.log(obj);




//function scope

// let y = 90;

function demo() {
    let y = 90;
    const z = 40;
    var x = 90;
    console.log(x);
    console.log(y);
    console.log(z);
}
demo();


{
    let y = 90;
    const z = 40;
    var x = 900;

}
console.log(x);
console.log(y);
console.log(z); 



* 1.call back and higher order functions. ...> whenever a function is passed as an argument to another function then that argument we call it as call back functiom.
2.arrays higher order functions.
3.strings.)
(call back function means oka function ni inkoka function loki argument lagaa  pass avuthundhi.)
(hof--means oka adhi argument ni tisukuntundhi).

What is a Function in JavaScript ?

    A function is a block of code that performs a specific task.

You define it once.

You can run(call) it whenever you want.
    why::we will recall in wheenevr we want.

Function Declaration

Function Expression

Arrow Function

Anonymous Function

IIFE

Callback Function

Constructor Function

Generator Function

Async Function

So, the most commonly used function types in JavaScript are:

Function Declarations

Function Expressions

Arrow Functions

Anonymous Functions(inside callbacks)

Async Functions

1. What is a Block of Code ?

    A block of code in JavaScript means:
 A group of one or more statements enclosed in curly braces { }.


 Why do we need Callbacks in JS ?

    JavaScript is asynchronous(non - blocking).
That means some operations(like loading data, reading files, API calls, setTimeout) take time.Instead of waiting, JS uses callbacks to say:

“When you finish this work, call this function.”*/

function callme(a) {
    console.log(typeof a);
    a();
}
callme(100);
callme(typeof a);
callme(true);
callme(function () {
    console.log("inside callback function");
    console.log("prasanna");
}); /* this is call function */









function callme(a) {
    console.log(typeof a);
    a();
}

let f = function () {
    console.log("virat kohili is a crickter")
}
callme(f);    /* so inthis code a is going to pint f */



// Higher order functions::
// if a function takes / returns another function then that function we will call as higher order function.

function callme() {//hof
    let f = function () {
        console.log("first");
    };
    return f;
}


let result = callme();
console.log(typeof result);
result(); */

function callme() {
    return { name: "prasanna", age: 23 };
    return [2, 4, 5];
    return function () {
        console.log("first");
    }
    let f = function () {
        console.log("second");
    };
    return f;
};
let result = callme();
console.log(typeof result);
result();



// 1 .so preveously we passed the function into the another function 
// 2.now we are taking another function from a function and then that function we called.



function add(a, b) {
    return a + b;
}

let result = add(5, 10);
console.log(result); // 15

function call() {
    console.log("hello prasanna");
}
call();

function callme() {
    console.log("hello world");
}
callme();


// types of functions

//  1.named function
function start() {
    console.log("hello world");
}
start();

Function with Return Value

function add(name) {
    console.log("hello," + name)
}
add("prasanna");
//return type

function add(a, b) {
    return a + b;

}
let val = add(2, 5);
console.log(val);


//2.Function Expressions

//A function expression means defining a function and assigning it to a variable.

let value = function () {
    console.log("hello world");
}
value();


//3.Arrow Function --->An arrow function is a shorter way to write functions, introduced in ES6 version (2015).

// It uses the => (arrow) syntax.  there is no function name.


let arrow = () => {
    console.log("this is a arrow structure")
}

arrow();

const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(20, 3));


const con = x => x * x;
console.log(con(4));



/* 4.Immediately invoked function expression (IIFE)

Why We Use IIFE in JavaScript?
1. Avoid Global Scope Pollution

In JavaScript, variables declared outside functions go into the global scope.

Too many global variables can conflict and cause bugs.

IIFE keeps variables inside its own private scope. */


(function () {
    console.log("this is iife");
})();

(function () {
    console.log("this is iife");
}());

(function (name) {
    console.log("hello," + name);
}("prasanna"));



// 6. Callback Functions

// oka function ni inkoka function loki argument ga pass chydam.

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
var cal = (val1, val2, operation) => {
    return operation(val1, val2);
}
console.log(cal(2, 3, add));
console.log(cal(2, 3, sub));

setTimeout(function () {
    console.log("this runs after 2 seconds");
}, 2000);


// basic callback function

function read(a) {

    a();
}
read(function () {
    console.log("this is first callback function");
});




// 2.arrays higher order functions



// // 1.push,pop,shift,unshift,splice,slice,

// arrays have some builtun methods.

// hof ..> forEach. Map,filter,reduce,sort

// foreach ---> we are function in side the foreach only not anymore.

// def:: it is used to just iterate on the entire array and it returns nothing.


//higher order functions::
function callme(){ 
    let f = function(){
        console.log("first")
    };
    console.log();
    return f;
}

callme()();


let result = callme();
console.log(typeof result);
result();
callme();

let result=callme();
    console.log(result);


function learning(){
     function f (){
        console.log("second");
    };
    return f;
}
let val = learning();
console.log(typeof val);
val();

function val5(){
    function f (a,b){
        return a+b;
    }
    return f;
}
// console.log(val5()(4,3));
let val = val5();
console.log(val(2,4));





 function speak(){
    function f(){
        console.log("second type");
    };
   return f;
}
let val1 = speak();
val1();
 


function speak(){
    function f(a,b){
     return a+b;
    }
    return f;

}
console.log(speak()(4,7));





  



