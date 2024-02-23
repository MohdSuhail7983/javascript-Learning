//For each is a method of an array, it will take one value at a time and that value will be assigned to a variable so that it will be executed///
let num = [33, 56, 67, 34, 62, 41];

// for(let x of num){
//     console.log(x);
// }

num.forEach((values, i , num)=>{

    console.log(values*5);    //We have used here an "Arrow-Function" inside a 'ForEach' Function
    console.log(values,i,num);  // The syntax of that 'foreach' function is looks like "Array.foreach((a) =>{ })"

});

// for each can accept three parameters at a time  i.e 'values', 'index', 'num or array as it is'//