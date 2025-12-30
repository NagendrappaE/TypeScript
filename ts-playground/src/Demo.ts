let accname:string='Welcome to TS';
console.log(accname);

let accnumber:number;
accnumber=123334;
console.log(accnumber);

let isValid:boolean=true;

console.log(isValid);

//
let unknow:unknown 
//it will become number data type
unknow=12333;

console.log(unknow);
console.log(typeof(unknow));

unknow=true
console.log(unknow);
console.log(typeof(unknow));

//any

let anyData:any=122233;

console.log(anyData);
console.log(typeof(anyData));


let unknowImp:unknown

 unknowImp=12333;

 let newval=unknowImp as string;

 newval.length;

 //Custom object

 let employee:{empId:number,empName:string};

 employee={empId:202,empName:'Nagendra'};

 console.log(employee);
 console.log(typeof(employee));


 let address:{street:string,city:string,houseNo?:number};

 address={street:'MG Road',city:'Bangalore'};

 address.houseNo=23;

 console.log(address);
 console.log(typeof(address));

  let addressRead:{ readonly street:string,city:string,houseNo?:number};

 addressRead={street:'MG Road',city:'Bangalore'};

 //addressRead.street='Indiranaganr'

 console.log(addressRead);
 console.log(typeof(addressRead));


//const with varibale
const empAddress:string='abc';

const empob:{id:number,name:string}={id:202,name:'Nagendra'};
empob.name='Ramya';


//array

let students:string[];
students=['Hiremath','neha','swati'];

//array  with number

let marks:number[];

marks=[90,78,45,1.6]

//

let undefinedList:undefined[];

undefinedList=[undefined,undefined,undefined];


//unknow of arrays

let unknownList:unknown[];

unknownList=[123,'abc',true,undefined,null];


let mandates:{umrn:string,emiAmount:number}[];

mandates=[{umrn:'BDBL12222222',emiAmount:233.89},{umrn:'KARB000001',emiAmount:420},{umrn:'UJVN0000007',emiAmount:2000.11}];
 
let mixedType:(string|number|boolean);
    mixedType=1233;
    mixedType='abc';
    mixedType=true;


let mixedTypeArray:(number|boolean[]);

mixedTypeArray=[true,false,true];

mixedTypeArray=1212121;


let mixedobject:(number|string|{id:number,name:string});
 mixedobject={id:202,name:'Nagendra'};
 mixedobject=12233;
 mixedobject='abc';


let mixedobjectArray:(number|string|{id:number,name:string})[];

mixedobjectArray=[{id:202,name:'Nagendra'},12233,'abc'];

//tuples

type EmployeeTuple = [number, string];

let sahan: EmployeeTuple;
 sahan=[202,'Sahana'];

 // tuple with object

 type EmployeeTupleWithObject = [number, {name:string,id:number}];


 let nethravath:EmployeeTupleWithObject=[203,{name:'Nethravath',id:203}];


 //

 type Vechicle={
    vechileName:string,
    milage:number,
    price?:number
 }


let car:Vechicle={
    vechileName:'BMW',
    milage:15,
    price:5000000
};

let bike:Vechicle={
    vechileName:'Ducati',
    milage:10
};

 type VechicleExt={
   readonly vechileName:string,
    milage:number,
    price?:number,
    addTope():void,
    addition?(x1:number,x2:number):number
 }



 let carExt:VechicleExt={
      vechileName:'BMW',
     milage:15,
     price:5000000,
     addTope:()=>{

        console.log('Adding top features to', carExt.vechileName);
     },

     addition:(x1,x2)=>{

        return x1+x2;
     }
     
 };

 let addion=carExt.addition?.(10,20);

 console.log(addion,carExt.milage);   

 let bikeExt:VechicleExt={
     vechileName:'Ducati',
     milage:10,
     addTope:()=>{
        console.log('Adding top features to', bikeExt.vechileName);
     }
 };


let vechilcetuple:[VechicleExt,string]

//