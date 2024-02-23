// This is how we return the value//
function greet(){
    return "How are you Mohd suhail";
}
let str = greet();    //we call the function and store in "str" and print the str after that//
console.log(str);

// Now we pass the value//
function note(user){   //similarly we can pass multiple values as much as we want by adding t he comma in between//
    return `${user} is Learning javascript`;
}
let user = "Suhail";
let str1 = note(user);
console.log(str1)
