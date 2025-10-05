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
// let users = [
//     {
//         name:"aravindh",
//         age:23
//     },
//     {
//         name:"manisha",
//         age:19

//     },
//     {
//         name:"rajesh",
//         age:31
//     },
//     {
//         name:"madhu",
//         age:10
//     }
// ];
// users.sort((a,b) => {
//     return a.age - b.age;
//     // return b["age"]-b["age"];
//     // users.sort((a, b) => b.age - a.age);

// });
// console.log(users);


//     users.sort((a, b) => b.age - a.age);




//     string::
  
  /*   we dont use splice method in strings why
    methods
charat 
slice
trim:remove spces front and end.
trimstart only front
trimEnd only effect on end.
spilt all as convert string.
ascicode:for method charcodeat
replace
toUpperCase
toLowerCase

regular expressions: */
    // tom legand 1.callback and strings and reg functions

    // 1.firxt template strings:${name}` means a place holder that holdes any variables 

    /* let name = "prasanna";
    let wave = `hi ${name}`;  
    console.log(wave); */


    // started strings methods

    // let str = "sudheer";
    // let arr = [4,5,6,7,8];

    //4,5,0,7,8
    // console.log(str,arr);//arrays are mutable
    // console.log(str.length,arr.length);
    // arr[2]=0;
    // str[2]='l';//string are not updated because immutability
    // console.log(arr,str);
    // let val=arr.slice(1,3);
    // console.log(val);

    // let val2=str.slice(1,3);
    // console.log(val2);

    //charat
    // let str = "naresh";
    // // console.log(str.charAt(5)+str.charAt(2)+{x:str.charAt(9)});

    // let str2 = "  ab c   ";
    // let something = str2.trim();
    // // console.log({x:something});
    // // console.log(something);
    // let segment1 = " ab c ";
    // let seg1 = segment1.trimEnd();
    // console.log({x:seg1});


    // let str = "4,3,2,1";
    // let fragment = str.split(",");
    // console.log(fragment);
    // let nums = fragment.forEach((a) =>Number(a));
    // console.log(nums);

    /* 
    ascivalues starts 
    a-->97
    A-->65
    0-9-->0 ascode is 48; */

    // let str = "ABCa3";
    // // let str2 = str.charCodeAt(3);
    // console.log(str.charCodeAt(str.length-1));

    // let str1 = " hello sanna prasanna";//pramanna
    //     // let newstring = str1.replaceAll('na','kt');
    //     // console.log(newstring);

    //     console.log(str1.toUpperCase());
    //     console.log(str1.toLowerCase());



    // regular expressions:;SYNTAX /hgjdhgkjd/...>Regular Expression (RegExp) in JavaScript is a pattern of characters used to search, match, validate, or replace text inside strings.


    // let str = "HeLLO world!yeLLow";
    // // console.log(str.indexOf(""));
    // let regexp = /llo/i;
    // // gi---case insensitive pattern means they dont care whether small leeter capital letter in word it will print all the letter that we given leetr  
    // // g case sensitive pattern:: only print given letter like /llo/
    // i--only first given letter conformid
    // let finalstr = str.replace(regexp,'X');
    // console.log(finalstr);
    /* 

    reg exp speacial caracters;:
    . dot  it match any one character 
    arsstric *---> 0 or more preceeeding chars.
    + plus---> 1 or more preceeeding chars.
    ? ...>0 or 1 preceeding
    */
    // let str = " i am prasanna";
    // let regexpresion = /a./g;
    // console.log(str.match(regexpresion));

    let str4 = "i am araaaaaaaaaaaaa    vind raa raaaa raaaaaaaaa";
    // let regexp = /ra*/g;
    // console.log(str4.match(regexp));
    let regexp = /ra?/g;
    console.log(str4.match(regexp));
