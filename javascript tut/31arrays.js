//In Js,An array is a special type of object that allows you to store and organize multiple values.Arrays can hold elements of any data type....//

// let values = new Array();   // we could create an array through this approach//

let values = [5,7,3];    // This is the another way to create an array//
console.log("the length of the array is:",values.length);    //array.length will give us the length of an array//
values.push(67);    //Push will add the value at the end of an array//
values.push(66);
console.log(values)

console.log(values[3]);  //This method will be used to 'fetched' the value of an array at a particular index...........//
console.log(values[1]);  // as index starts from '0' in arrays so it prints first value if we write "value[1]" in an array//


// 1. Array Literal Syntax:
// The most common way to create an array is using square brackets [] and specifying the elements.
// let myArray = [1, 2, 3, "four", true];

// 2. Array Constructor:
// You can use the Array constructor to create an array.
// let myArray = new Array(1, 2, 3, "four", true);      //focus on "new" keyword here it represents constructor.....///

// 3. Empty Array:
// You can create an empty array and add elements later.
// let emptyArray = [];
// emptyArray[0] = "first";
// emptyArray[1] = "second";

// Accessing Array Elements:
// Array elements can be accessed using square bracket notation.
// let myArray = [1, 2, 3, "four", true];
// console.log(myArray[0]);  // Output: 1
// console.log(myArray[3]);  // Output: "four"

// Array Properties and Methods:
// Arrays have several built-in properties and methods.
// let myArray = [1, 2, 3, 4, 5];

// console.log(myArray.length);          // Property: returns the number of elements
// console.log(myArray.push(6));         // Method: adds an element to the end
// console.log(myArray.pop());           // Method: removes the last element
// console.log(myArray.join(", "));      // Method: joins array elements into a string

// Iterating Over Arrays:
// You can use loops or array methods for iteration.
// let myArray = [1, 2, 3, 4, 5];
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }
// myArray.forEach(function(element) {
//     console.log(element);
// });

// Manipulating Arrays:
// Arrays can be modified by adding, removing, or changing elements.
// let myArray = [1, 2, 3, 4, 5];
// myArray.push(6);          // Adds an element to the end
// myArray.pop();            // Removes the last element
// myArray.shift();          // Removes the first element
// myArray.unshift(0);       // Adds an element to the beginning
// myArray.splice(2, 1);     // Removes one element at index 2
// myArray[1] = "new value"; // Modifies an element