"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type assertion
let payment = { id: 123, accName: 'nagendra' };
const fpdPayment = payment;
// 1. Angle-bracket syntax (Only works in .ts files, not .tsx)
let someString = 'Hellow how are you';
let stringlength = someString.length;
console.log(stringlength);
// 2. 'as' syntax (Preferred, works in .ts and .tsx)
let stringConverted = someString;
//let me find out the length
let len = stringConverted.length;
console.log(len);
// 3. Type assertion with DOM elements
try {
    let inputD = document.querySelector('input[type="text"]');
    if (inputD) {
        let htmlInp = inputD;
        console.log(htmlInp);
    }
}
catch (err) {
    if (err instanceof Error) {
        console.log('error occured' + err);
    }
}
//4 type assertion on union type
let numOrString = 1;
//forced to become number 
let forcedStr = numOrString;
//# sourceMappingURL=Type-assertion-Ex.js.map