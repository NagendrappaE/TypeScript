//basic  function with generics


function test<T>(inp: T): void {
    console.log(inp);
    console.log(typeof inp);
}
//calling with number

let ageDiff = test<number>(10);

let undefinedCheck = test<undefined>(undefined);
//calling with string

let stringCheck = test<string>('Hellow TS');

// Custom object

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}



let personObj = new Person('Nagendra', 25);

let personeObjectcheck = test<Person>(personObj);
// geneic with interface with class
interface Employee<Person> {
    pers: Person
}

let empObj = test<Employee<Person>>({ pers: personObj });

console.log(empObj);


//generic with  interface with multiple variables

interface EmployeeDetails<Person> {

    empid: number;
    emp: Person
}

let empDetailObj=test<EmployeeDetails<Person>>({empid:101,emp:personObj});



interface ApiResponse<T>{
    status:number,
    data:T  
}


let apiResponseObj=test<ApiResponse<string>>({status:200,data:'Success'});

let apiResponseObjNumber=test<ApiResponse<number>>({status:404,data:12345});


//generic with  multiple Type variables 

function  testDouble<U,V>(inp:U,inp2:V):V{

    console.log(inp);
    console.log(typeof inp);
    return inp2;
}



let numbertestDouble=testDouble<number,string>(123,'nagendra');

let objecttestCheck=testDouble<Person,string>(personObj,'developer');

//


//generic with inheritance

function disaplLength<T extends {length:string}>(inp :T):number
{
    console.log(inp.length);
    return inp.length.length;
}

let lengthCheck=disaplLength<{length:string}>({length:'Hellow TS'});

let lengthCheck2=disaplLength<{length:string,accName:string}>({length:'Generics in TS',accName:'Nagendra'});
