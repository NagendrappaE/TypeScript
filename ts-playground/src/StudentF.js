"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentF {
    //the default value will be not defined
    age;
    name;
    //no value defined
    accountNumber;
    //purely undefined   no value
    draccnum;
    // optional parameters still it treats as undefined
    payerName;
    //default constructor  created by JS compiler
    //setter
    set setAge(v1) {
        this.age = v1;
    }
    //getter
    get getAge() {
        return this.age;
    }
    //method
    displayInfo() {
        console.log(`Age: ${this.age} the name ${this.name} the account number ${this.accountNumber} the creditAcc ${this.draccnum} payerName ${this.payerName}`);
    }
}
let x = new StudentF();
x.setAge = 25;
x.name = 'Nagendra';
x.accountNumber = 123456;
//i will try to reasssign to undefined  it will compile time error
//x.draccnum=12222
x.displayInfo();
//still it is undefined  even though I tried to assign a value
let xx = x ? x.draccnum : 1122;
console.log(xx);
//# sourceMappingURL=StudentF.js.map