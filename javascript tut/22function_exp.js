//Javascript treats function as an object//
// FUnction in javscript is an object type//

let add = function(num1 , num2)
{   // here we create a annonymms function and pass two number in it and assigned that function to the variable add// 
    return num1 + num2;
}
let sum = add;  //initial add is assigned to the sum and now the sum will be treated as a function//

let result = add(5,1222);   // this will be called a function expression & here we are treating this add as a function// 

console.log(result);

