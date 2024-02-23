// for...of Loop:------
// Iterates Over Values===={goes through each individual element or item in an iterable object}
// Not Suitable for Objects//
// for of loop will be used in the arrays in javascript//
// Use for...of----when you want to iterate over the values of an iterable object like an array, string, map, set, etc.

let nums = [];

nums[0] = 5;
nums[99] = 9;
console.log("The length of the array is=",nums.length);
console.log(nums);

for(let n of nums){
    console.log(n);
}
for(let key in nums){
    console.log("The key is=",key);    //This will give us the key//
}
for(let key in nums){
    console.log("The value of the keys are=",nums[key]);   //This will give us the values of the keys //
}