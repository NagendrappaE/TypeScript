class StudentF{

     //the default value will be not defined
     age:unknown;
     name:unknown;
     //no value defined
     accountNumber:undefined|number;

     //purely undefined   no value
     draccnum:undefined

     // optional parameters still it treats as undefined

     payerName?:string;


     //default constructor  created by JS compiler

     //setter
     public set setAge(v1:unknown){
         this.age=v1;
     }

     //getter
     public get getAge():unknown{
         return this.age;
     }

     //method
     public displayInfo():void{
         console.log(`Age: ${this.age} the name ${this.name} the account number ${this.accountNumber} the creditAcc ${this.draccnum} payerName ${this.payerName}` );
     }


}

let x=new StudentF();
x.setAge=25;
x.name='Nagendra';
x.accountNumber=123456;

//i will try to reasssign to undefined  it will compile time error
//x.draccnum=12222


x.displayInfo();
//still it is undefined  even though I tried to assign a value
let xx=x?x.draccnum:1122;
console.log(xx);

