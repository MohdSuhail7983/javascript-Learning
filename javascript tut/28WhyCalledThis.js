function findfastlaptop(laptop1,laptop2){

    if(laptop1.cpu>laptop2.cpu)
        console.log(laptop1);  
  else
      console.log(laptop2);   
  }
let laptop2 = {
    cpu: 'i7',
    ram: '8',
    brand: 'dell',
    
    getconfigg: function(){
         
        console.log(this.cpu);   //This will fetch the current object we are reffering to//
    }
}
// laptop2.getconfigg();
let laptop1 = {
    cpu: 'i9',
    ram: '16',
    brand: 'lenevo',
    compare: function(other){
        if(this.cpu>other.cpu)
        console.log(this);  
  else
      console.log(other);   

    },
    getconfig: function(){    
        console.log(this.cpu);   //This will fetch the current object we are reffering to//
    }
}

// findfastlaptop(laptop1,laptop2);   //this is third party comparing both laptop//

laptop1.compare(laptop2)   //both laptop are comparing with one another.