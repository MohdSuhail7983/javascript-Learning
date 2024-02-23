// object inside a object//
let alien = {
    name : 'mohd suhail',
    technology: 'javascript',
    location : 'delhi',

    laptop : {
        cpu : 'i7',
        ram : '8',
        brand : 'Lenovo',
        display : '14.6',
    }
}


console.log(alien);

console.log(alien['name']);

console.log(alien.laptop);

console.log(alien.laptop.brand);

console.log(alien.laptop.brand.length); 
 //tell the length of string brand which is inside laptop and that is inside of alien//

console.log(alien.laptop.brand?.length);
//  work same as above statement// 

// NOTE:- Javascript provide a keyword which is "delete" to delete a specific property from the object i.e see below-----//
//   delete alien.laptop; 
//   we write like this
