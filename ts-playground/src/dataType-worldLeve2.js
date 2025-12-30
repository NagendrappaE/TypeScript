"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let
let userd;
userd = 12222;
userd = 'hello';
console.log(userd);
let userStatus = "ACTIVE";
//this is not possible its like enum
//let userStatus1:status="NONE";
console.log(userStatus);
//arrays with comple types
//string
let marks = ["100", "200", "300"];
console.log(marks);
// number
let salaryMonthly = [200, 100, 200, 400];
console.log(salaryMonthly);
//custom  with arrays
let sushma = { sid: 3, sname: "Sushma" };
let ece = [{ sid: 1, sname: "Nagendra" }, { sid: 2, sname: "Ramya BC" }];
console.log(ece);
ece.push({ sid: 3, sname: "John Doe" });
console.log(ece);
//Mixed Arrays
let mixedStu = [{ sid: 4, sname: "Ak56" }, 12, 233, { sid: 8, sname: "Pavithra" }];
console.log(mixedStu);
//Tuples  
let userData;
userData = [101, "John Doe", true];
console.log(userData);
userData[1] = 'sampl';
console.log(userData);
//
let operationImpl1 = {
    operName: ((x1, x2) => x1 + 2),
    ename: 'Nagendra' + 'nnnn',
    eid: 101
};
operationImpl1.ename = 'Sowmya';
console.log(operationImpl1);
console.log(operationImpl1.operName(10, 20));
let operationImpl2 = {
    operation2: ((y1, y2) => y2 + 100 + y2),
    ename: 'Ramya BC',
    eid: 200
};
//creating a new object
let add = ((x, y) => x + y + 12);
//setting values
add.eid = 101;
add.ename = "John Doe";
console.log(add(10, 20));
let update = (st, sname) => {
    st.sid = st.sid + 10000;
    st.sname = sname;
    return st;
};
let modifedValeJonh = update({ sid: 1, sname: "John Doe" }, "Jane Doe");
let modifiedvalRamya = update(sushma, "Ramya BC");
console.log(modifedValeJonh);
console.log(modifiedvalRamya);
//# sourceMappingURL=dataType-worldLeve2.js.map