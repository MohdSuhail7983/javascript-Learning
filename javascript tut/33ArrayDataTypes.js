//we can create an array with different data types within one particular array //

// we can put any type of datatype inside an array as showed below//

let array = ["suhail", 6,'true', {tech:'javascript'},function(){console.log("Mohd suhail this is a function inside an array"); }];

console.log(array);
array.push(3)                  // it will add "3" at the end of an array//
console.log(array);
array[4]();                  //This is a function call from an array//