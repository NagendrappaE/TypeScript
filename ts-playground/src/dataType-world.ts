const  x:number=13;
const  y:string="Hello";
console.log(x);
console.log(y);

var isMarried:boolean=true

console.log(isMarried);
///////////////////let is normal varible as java and const is final variable /////
// same variable
let  mymarks:number;
mymarks=100;
console.log(mymarks);

if(mymarks>50){
    mymarks=mymarks+30
}
console.log(mymarks);
//diffrent variable concept

let checkMe:number;
checkMe=10;
console.log('before'+checkMe);

if(checkMe>8){
    let checkMe=20;
    //diffrent variabl
    console.log('inside'+checkMe);
}
console.log('after'+checkMe);

