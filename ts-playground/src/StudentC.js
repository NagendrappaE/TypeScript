"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentC {
    //private constructor
    constructor(salary) {
        console.log(`Salary is : ${salary}`);
    }
    static getInstance() {
        return new StudentC(10000);
    }
}
let out = StudentC.getInstance();
console.log(out);
//# sourceMappingURL=StudentC.js.map