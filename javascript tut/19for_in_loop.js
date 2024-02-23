// for..in Loop:--------
// 1. Used for Iterating Over Object Properties:
// 2. Iterates Over Keys (Property Names):
// 3. Not Suitable for Arrays
// 4.used when you want to iterate over the enumerable properties of an object, including inherited properties and want to get the keys of an object.



let alien = {
        name: 'mohd_suhail',
        tech: 'javascript',
        laptop : {
            cpu: 'i7',
            ram: '8',
            brand: 'Asus',
        }
}
for(let key in alien){
    console.log(key,alien[key]);
}
