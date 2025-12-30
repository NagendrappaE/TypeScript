"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = 13;
const y = "Hello";
console.log(x);
console.log(y);
var isMarried = true;
console.log(isMarried);
///////////////////let is normal varible as java and const is final variable /////
// same variable
let mymarks;
mymarks = 100;
console.log(mymarks);
if (mymarks > 50) {
    mymarks = mymarks + 30;
}
console.log(mymarks);
//diffrent variable concept
let checkMe;
checkMe = 10;
console.log('before' + checkMe);
if (checkMe > 8) {
    let checkMe = 20;
    //diffrent variabl
    console.log('inside' + checkMe);
}
console.log('after' + checkMe);
//# sourceMappingURL=dataType-world.js.map