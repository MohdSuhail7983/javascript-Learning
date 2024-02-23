
// function User(fn,ln){   //This is a constructor function//
//     this.fname=fn;
//     this.lname=ln;
// }
// let obj1 = {
//     fname:"Mohd",
//     lname:"Suhail",

// };
// let obj2={
//     fname: "Naveen",
//     lname: "reddy",

// };
// console.log(obj1);
// console.log(obj2);


// 2. second code start from here

function Alien(name,tech){
    this.name = name;
    this.tech = tech;

}
let alien1 = new Alien('Mohd','javscript');
let alien2 = new Alien('Naveen','Python');

// alien2.tech = 'django';         //we can change the value from here of the technology so it will be seen in alien2//

console.log(alien1);
console.log(alien2);