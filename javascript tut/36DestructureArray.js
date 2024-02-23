let num = [3, 7, 4, 8, 1]
console.log(num);

let [a,b,c,d,e] = num;   //here array will be destructured and assigned as a=3, b=7, c=4, d=8, e=1;//
//a   b   c   d   e
//3   7   4   8   1

console.log('The value of d is equal to', d);
console.log('The value of a is equal to', a);
//----------------------------------------------------------------------------------------------------------------
let num1 = 5;
let num2 = 6;
[num1,num2]=[num2,num1];
console.log('num1 is=' + num1,'num2 is='+num2);

//---------------------------------------------------------------------------------------------------------------------

let words = "My name is Mohd Suhail gaur".split(' '); //This split will convert our string in the form of an array like every word saperate in the " "//
let [o,p,,...r] = words;
console.log(r);
let[i,j,k,l,m] = words;
console.log(l,m);
