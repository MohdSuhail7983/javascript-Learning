// there are two types of datatypes in javascript as-:
// 1. primitive datatypes
// ---:Number,string,boolean,null,undefined,bigint,symbol etc.
// 2. non-primitive datatype or object
// ---: non-primitive or object datatypes are which are not primitive datatypes.

let data = 8               //number
let user = "suhail"       //string
let num1 = 7.8

 //the typeof operator is used to find out the type of datatype.....
 
 console.log(typeof user);  
 console.log(typeof num1); 
 
 
 let num2 = 27653124568125
 console.log(num2 * 25)
 console.log(num2)

 let numb=3e17
 console.log(numb)

 let num4 = 5/0
 console.log(num4)  //will give infinity

 let num5= -8/0
console.log(num5)     // will give -infinity

//  maximum range of biggest integer we can take is 1.79769313486233157e+308
// but the safe range of integer we can store is 9007199254740991

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

let num6 = 732656737765476389712896673152n  //This is how we can represent a big number by adding "n" at the end...............
console.log(num6);
console.log(num6+3)  //if we add after defining the number as big in and further add something to it the it will give this TypeError:-------- 
//------------ Cannot mix BigInt and other types, use explicit conversions