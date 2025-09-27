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
