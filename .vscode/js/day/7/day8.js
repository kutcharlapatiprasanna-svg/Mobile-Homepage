 let a = 20;
let b= 100;
let f = function(a,b){
    console.log(a+b);
    let f1 = () =>{
        let b = 30;
        console.log(a+b);
    }          //0  1
        return [a-b,f1];
}
let result=f(a+2,a+4);
// console.log(result);//
console.log(typeof result[1]);//function
// result[1]();//
result[1]();//52 


// today leganda:
// block scope
//closures
//objects(references)






/* scope :the area where it is available.


Block ? {}excluding functions 
let const declared varaibles are block scoped 
it is nothing but brackets{},any conditional ,loops

if a varaible is declared inside a block with let/const keywords then that varaible can be accessed with in that block only.

global scope:
every global line has to be executed within the global container only


local scope::
every local line will be individually executed by the particular function 


var and function declarations are not block scoped but they are context scoped  */


console.log(a);
if(true){
    var c = 200;
    let b = 20;
    console.log(a+b);
}
console.log(c);
console.log(b);