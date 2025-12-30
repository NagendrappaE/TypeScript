//The in operator in TypeScript (and JavaScript) is used to check if a property exists in an object or its prototype chain.
// defining an object
const obj1:object={"accName":'Nagendra',"accId":123,"isActive":true};

let isExist:boolean="test" in obj1;

console.log('is exits'+isExist);

let isExist2:boolean="accId" in obj1;

console.log('is exits'+isExist2);

if("accName" in obj1){
    console.log('accName is there in obj1');

    console.log(obj1.accName);

}



//Example 2:

interface Student{
    name:string;
    age:number;
    grade?:string; //optional property
}

//create an object of Student type
const student1:Student={name:'John',age:20};

//check if 'grade' property exists in student1

if('grade' in student1){
    console.log(`Grade exists: ${student1.grade}`);
}else{
    console.log('Grade does not exist in student1');
}

