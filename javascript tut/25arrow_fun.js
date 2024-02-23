  
// In JavaScript, an arrow function is a concise or short way to write anonymous functions. Arrow functions were introduced in ECMAScript 6 (ES6) and provide 
// a more concise syntax compared to traditional function expressions. Arrow functions are especially useful for writing shorter and cleaner code.

//Anonymous functions in JavaScript are functions that do not have a name..

//Arrow functions have a shorter syntax compared to traditional function expressions, making them more readable and convenient.
//If the function body consists of a single expression, the curly braces and the return keyword can be omitted. The result of the expression-----
//------is implicitly returned.




  // Traditional function expression
// const traditionalFunction = function(parameters) {
    // function body
// };

// Arrow function
// const arrowFunction = (parameters) => {
    // function body
// };
  
// here we don't need to write function we will used the arrow, compiler will understand that this is a function//
let greet = (user) =>{ 
    console.log("Mohd Suhail" + user);
    return 1;
}
 console.log(greet(' learning the arrow function in javascript'));

// Another code
 let add = (num1,num2)=> num1+num2;
 let result = add(5,6);
 console.log((result));