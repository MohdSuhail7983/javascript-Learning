//motive-: How to add a function to an object//
//Methods and functions both are the same things..//
//methods may be defined as the behaviour of an object//
//An object having a property but it add's a behaviour and we can add behaviour through functions and behaviour of an object is called method.// 

//A function or methods belongs to an object and if we want to call that function then we have to use the object name as above was laptop//

let laptop ={
    cpu: 'i9',
    ram: '16',       // This laptop we created as a object//
    memory: '1048gb',
    brand: 'Asus',
     
    // here below in function we can paas some parameters and could also write some value//
    greet: function(){     //We will call this as a method but this is a function//
        console.log("Hello Mohd Suhail");
    }
}
laptop.greet();   // Greet is a method which belongs to an object laptop//