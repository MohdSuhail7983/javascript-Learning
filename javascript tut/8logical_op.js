// There are mainly three types of logical operators we will use:-
// 1. And operator- {Denoted by &&}.
// 2. OR operator- {Denoted by ||}.
// 3. Not operator- {Denoted by !}.

// AND operator
let x = 7, y = 8, z = 9;
let result = x < y && x < z
console.log(result)

// OR operator
let num1 = 4, num2 = 5, num3 = 6;

let num_res = num1 > num2 || num3 > num2

let num_res1 = num1 > num2 || num3 < num2

console.log(num_res) 

console.log(num_res1) 

// NOT operator

let a = 3, b = 5, c = 7
let result1 = a < b || b < c
let n = !result1  // it will print the reverse of result 1 beacuse we used not operator here//
console.log(n)


