// let myArray = new Array(1, 2, 3, "four", true);
// console.log(myArray);

// let myArray1 = [1, 2, 3, "four", true, "Suhail"];
// console.log(myArray1);

// let emptyArray = [];
// emptyArray[0] = "first";
// emptyArray[1] = "second";
// console.log(emptyArray);

let myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2);

console.log("length of array is=",myArray2.length);                             // Property: returns the number of elements

console.log("The last added element at the end is=",myArray2.push(6));         // Method: adds an element to the end
console.log(myArray2);

console.log("The last removed element is=",myArray2.pop());                   // Method: removes the last element
console.log(myArray2);

console.log("joined array element to the string is=",myArray2.join(", "));  // Method: joins array elements into a string
console.log(myArray2);



let myArray3 = [1, 2, 3, 4, 5, 6];
console.log(myArray3);

myArray3.push(7);          // Adds an element to the end
console.log(myArray3);

myArray3.pop();            // Removes the last element
console.log(myArray3);

myArray3.shift();          // Removes the first element
console.log(myArray3);

myArray3.unshift(0);       // Adds an element to the beginning
console.log(myArray3);

myArray3.splice(2, 3, 9, 5, 88);     // Removes one element at index 2
console.log(myArray3);     //  myArray3.splice(2, 1); = we could add values also by using "myArray.splice(2,1,7)" starting two will be for removal
                          // and how much we want to remove and after that we can add any number we want...//

myArray3[1] = "9"; // Modifies an element
console.log(myArray3);