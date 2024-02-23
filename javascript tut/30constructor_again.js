
function Alien(name,tech,city){   // This is a constructor function and parameters also passed within this//
    this.name = name;    
    this.tech = tech;
    this.city = city;

    this.work = function(){
        console.log("Learning javascript from telusko");
    }
      
}

let alien1 = new Alien('Mohd Suhail','Javascript','roorkee');    // alien1 is an object created here and 'Alien' is a function created here...//
let alien2 = new Alien('naveen reddy','python','Delhi');
let alien3 = new Alien('raju','django','mumbai');

//we can also change the value of any parameter passed in the function, see below::::
alien1.tech = 'dotnet';
alien2.name = 'Sonu';


console.log(alien1);
console.log(alien2);
console.log(alien3);
alien1.work();