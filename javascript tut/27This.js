// In JavaScript,The this keyword is a special keyword that refers to the current execution context//

let laptop1 = {
    cpu: 'i5',
    ram: '8',
    brand: 'dell',
    
    getconfigg: function(){
        // console.log(laptop2.cpu);  
        console.log(this.brand);   //This will fetch the current object we are reffering to//
    }
}

laptop1.getconfigg();


let laptop2 = {
    cpu: 'i9',
    ram: '16',
    brand: 'lenevo',
    
    getconfig: function(){
        // console.log(laptop1.cpu);  
        console.log(this.cpu);   //This will fetch the current object we are reffering to//
    }
}

laptop2.getconfig();