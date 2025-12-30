//let
let userd: string|number;

userd=12222;
userd='hello';
console.log(userd);

//type

type status="ACTIVE"|"INACTIVE"|"PENDING";

let userStatus:status="ACTIVE";
//this is not possible its like enum
//let userStatus1:status="NONE";
console.log(userStatus);

//arrays with comple types
//string
let marks:string[]=["100","200","300"];
console.log(marks);
// number
let salaryMonthly:number[]=[200,100,200,400];
console.log(salaryMonthly)

//custom  data type
type Student={
    sid:number,
    sname:string
}

//custom  with arrays

let sushma:Student={sid:3,sname:"Sushma"};

let ece:Student[]=[{sid:1,sname:"Nagendra"},{sid:2,sname:"Ramya BC"}];
console.log(ece);
ece.push({sid:3,sname:"John Doe"});
console.log(ece);

//Mixed Arrays
let mixedStu:(Student|number)[]=[{sid:4,sname:"Ak56"},12,233,{sid:8,sname:"Pavithra"}];
console.log(mixedStu);

//Tuples  

let userData:[number,string,boolean];

userData=[101,"John Doe",true];
console.log(userData);

userData[1]='sampl';
console.log(userData)

//interface 

interface Operation{
    (x:number,y:number):number
     ename:string,
     eid:number,
     
}
//

let operationImpl1={

    operName:((x1:number,x2:number)=>x1+2),
    ename:'Nagendra'+'nnnn',
    eid:101

}

operationImpl1.ename='Sowmya';
console.log(operationImpl1);
console.log(operationImpl1.operName(10,20));



let operationImpl2={

    operation2:((y1:number,y2:number)=>y2+100+y2),
    ename:'Ramya BC',
    eid:200

}

//creating a new object
let add =((x:number,y:number)=>x+y+12) as Operation
//setting values
add.eid=101;
add.ename="John Doe";

console.log(add(10,20));


interface OperationHead{

    update(st:Student,x:string):Student;
    
}

let update=(st:Student,sname:string)=>{
    st.sid=st.sid+10000;
    st.sname=sname;
    return st;
}

let modifedValeJonh=update({sid:1,sname:"John Doe"},"Jane Doe");
let modifiedvalRamya=update(sushma,"Ramya BC");


console.log(modifedValeJonh);
console.log(modifiedvalRamya);
