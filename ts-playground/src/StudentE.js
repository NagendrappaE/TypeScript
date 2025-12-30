"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentE {
    num = 0;
    //there will be default contructor
    //setter 
    set setNum(v1) {
        this.num = v1;
    }
    get getNum() {
        return this.num;
    }
}
let x = new StudentE();
x.setNum = 5;
console.log(x.getNum);
//# sourceMappingURL=StudentE.js.map