
//let user = "Mohd_suhail"; this is the function which is below in "10th line"and used above and this process is called hoisting//

//local variable can be created inside these below paranthesis "()" and could also be created between { }........
function greet(u)  //Here this is a local variable which is created inside this greet function//

{
    let num = 5;   //This is also a local variable//
    console.log(num);
    return `Hello ${u}`;
}

// console.log(num);    // Here we are trying to used this local variable outside the function and it's scope so it will no be executed//

let user = "Mohd_suhail";//This function is being used above in return statement, this is a javascript Hoisting concept which used a specific fun--
//--- above before defining that particular function//   //This "user" is known as global variable and has scope in the entire program...//

let str = greet(user);

console.log(str);