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