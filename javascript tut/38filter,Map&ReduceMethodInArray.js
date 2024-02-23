//The filter method is a higher-order array method in JavaScript that is used to create a new array containing elements that satisfy a specified
// condition. It allows you to filter out elements from an existing array based on a provided callback function.

// let num = [4,6,27,89,23,76];
//    num.filter(n => n%2===0);   //This filter method will identify the "odd and even" numbers in an array as per the condition//
//     num.forEach( n => {
//     console.log(n);
//      console.log(num);
// });

//FILTER takes a parameter or argument and it will check condition and if the condition is true it will send that condition ahead//
//MAP FUNCTION IN JS= The map function is a way to change each element of an array based on a rule or operation you define.//
//REDUCE IN JS=The reduce function in JavaScript is another higher-order function that is used to combine elements of an array into a single value//
let num = [1,2,3,4,5,6,];
let result = num.filter(n => n%2===0)  //here in this consition This filter method will identify the "odd and even" numbers in an array as per the condition we provide to get odd or even//
.map(a => a*2)    //Ex of maap fun= It's like telling the computer, "Hey, take each number, multiply it with 2, and give me a new list with those doubled numbers."
// .forEach(n => {

    .reduce((a,b) => a + b);   
    console.log(result);     // print addition of '2*2 =4, 4*2 =8, 6*2 =12'=======24///
    

