"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentD {
    name;
    designation;
    x = null;
    //default parameters are defined at class body  name,designation,experience cant access we did not added either private/public
    constructor(name, designation, experience) {
        this.name = name;
        this.designation = designation;
    }
    //non static method
    display() {
        console.log(`hellow ${this.designation}`);
    }
    //getter 
    get getName() {
        return this.name;
    }
    //setter method to variable
    set setName(newname) {
        this.name = newname;
    }
    //designation set 
    set setDesignation(newdesignation) {
        this.designation = newdesignation;
    }
    get getDesignation() {
        return this.designation;
    }
}
//let me access object
let s1 = new StudentD("John", "Developer", 5);
console.log(s1);
//setting values 
s1.setName = "Mike";
console.log(s1);
//both are same
s1.name = 'Nagendra';
console.log(s1);
//setting private designation not possible
//setting via setter of private variable designation
s1.setDesignation = "Senior Developer";
console.log(s1);
//# sourceMappingURL=StudentD.js.map