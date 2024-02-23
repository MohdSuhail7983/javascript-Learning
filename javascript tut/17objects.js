// An object in JavaScript is a composite data type that consists of key-value pairs. Each key is a string (or symbol), and each value can be any
// valid JavaScript data type, including other objects. Objects provide a way to structure and organize related information within a single entity.

//Short definition-: Objects in js represent the real entities.......//

let alien = {
     name: "Mohd Suhail",
     tech: "Learning Javascript",
     City: "New delhi",
     Graduation: "Btech",
     Looking: "Looking for a Job",
     work_exp: "fresher"  // either we can use underscore//
    
}
console.log(alien);
console.log(alien.Looking);
console.log(alien.City);
console.log(alien.Graduation);
console.log(alien.name);
console.log(alien.tech);
// for fetching a specific property we can use . operator like we used above//
                            //  OR   //
// we can use the [] i.e square brackets for the same purpose for fetching a specific property// 

 console.log(alien['City']);
 console.log(alien['name']);
 console.log(alien['work_exp'])

 let input = 'name1'
 let input2 = 'tech2'
 let person = {
    name1: 'suhail',
    tech2: 'front-end',
 }
 console.log(person[input]);
 console.log(person[input2]);