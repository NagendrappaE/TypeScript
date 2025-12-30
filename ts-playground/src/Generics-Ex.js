"use strict";
//basic  function with generics
Object.defineProperty(exports, "__esModule", { value: true });
function test(inp) {
    console.log(inp);
    console.log(typeof inp);
}
//calling with number
let ageDiff = test(10);
let undefinedCheck = test(undefined);
//calling with string
let stringCheck = test('Hellow TS');
// Custom object
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let personObj = new Person('Nagendra', 25);
let personeObjectcheck = test(personObj);
let empObj = test({ pers: personObj });
console.log(empObj);
let empDetailObj = test({ empid: 101, emp: personObj });
let apiResponseObj = test({ status: 200, data: 'Success' });
let apiResponseObjNumber = test({ status: 404, data: 12345 });
//generic with  multiple Type variables 
function testDouble(inp, inp2) {
    console.log(inp);
    console.log(typeof inp);
    return inp2;
}
let numbertestDouble = testDouble(123, 'nagendra');
let objecttestCheck = testDouble(personObj, 'developer');
//
//generic with inheritance
function disaplLength(inp) {
    console.log(inp.length);
    return inp.length.length;
}
let lengthCheck = disaplLength({ length: 'Hellow TS' });
let lengthCheck2 = disaplLength({ length: 'Generics in TS', accName: 'Nagendra' });
//# sourceMappingURL=Generics-Ex.js.map