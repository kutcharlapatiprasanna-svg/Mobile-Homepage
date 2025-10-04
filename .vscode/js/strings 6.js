/* sorting techniques::
(a,b) =>+ve | -ve|0
return -ve value if we need 'a' to be before 'b' in the final output. 
return +ve value if we need 'b' to be before 'a' in the final output.

The exact purpose of sorting in JS (or any language) is:
 To reorder elements of an array based on rules (alphabetical, numerical, custom logic) so they are meaningful or easier to use.

 Example: Shopping Website – Sorting Products by Price

Imagine you are building an online shopping website.
You have product prices stored in an array:



increasing order;
a>b:
(19,3)=>+ve(19-3)(a-b)

a<b
(12,31)=>-ve(12-31)(a-b)

increasing order;
a>b:
(19,3)=>+ve(3-19)(b-a)

a<b
(12,31)=>-ve(31-12)(b-a)
 */


// let arr = [6,12,78,90,112]
// // arr.sort((a,b) =>a-b);
// // console.log(arr);   

// arr.sort();
// console.log(arr);



// let arr = [9,5,6,3,2]
// arr.sort();
// console.log(arr);  
// always compare two values a,b
let users = [
    {
        name:"aravindh",
        age:23
    },
    {
        name:"manisha",
        age:19

    },
    {
        name:"rajesh",
        age:31
    },
    {
        name:"madhu",
        age:10
    }
];
users.sort((a,b) => {
    return a.age - b.age;
    // return b["age"]-b["age"];
    // users.sort((a, b) => b.age - a.age);

});
console.log(users);


    users.sort((a, b) => b.age - a.age);




    string::
  
  /*   we dont use splice method in strings why
    methods
charat 
slice
trim:remove spces front and end
trimstart only front
trimEnd only effect on end.
spilt all as convert string.
ascicode:for method charcodeat
replace
toUpperCase
toLowerCase

regular expressions: */