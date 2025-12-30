//Object  one way
let baseRequest: object = { "name": 'Nagendra', "aadharNumber": 123333333, "requestType": "SEEDING" };
console.log(baseRequest);
//directly specifyig object type
let baseRequest2: { "name": string, "aadharNumber": number, "requestType": string } = { "name": 'Nagendra', "aadharNumber": 123333333, "requestType": "SEEDING" };

console.log(baseRequest2);

//like Map key and value pair

let score: { [k: number]: string } = { 1: 'A', 2: 'B', 3: 'C' };

console.log(score[2]);

let score2: { [y: string]: number } = { "Maths": 90, "Science": 80, "English": 70 };

// example with interface

interface Vehicle {
    brand: string
}

let vechileColl: { [k: number]: Vehicle } = { 1: { brand: 'BMW' }, 2: { brand: 'Audi' } };

console.log(typeof vechileColl);

let bm = vechileColl[1];
console.log(bm?.brand);

//Can we have  undefined dataType as key  no not allwoed

//let data:{[k:undefined]:string}={undefined:'Nagendra'};

//optional parameters

let optionalData: { "name"?: string, "age": number };

optionalData = { "age": 25 };

console.log(optionalData);

console.log(typeof optionalData);

//optional with data

//Map like structure with optional parameter


let optionalIndex: { [x: number]: string | boolean | undefined };
optionalIndex = { 1: 'A', 2: 'B', 3: 'DD', 4: undefined };

console.log(typeof optionalIndex);

//object with readonly properties

let readonlyObj: { readonly id: number, name: string } = { id: 1234, name: 'Nagendra' };

console.log(readonlyObj);
//this created  with readonly property so not allowed


//readonlyObj.id=2222
//this created separate  object
readonlyObj = { id: 123333, name: 'Changed name' };

console.log(readonlyObj);



//Directly defining object with methods

let objWithMethod: {

    name: string,
    display: () => void
} = {

    name: 'Nagendra',
    display: function (): void {
        console.log(`Hello ${this.name}`);
    }
}

//directly defining object with mulitple methods

let multiMethodobj: { n1: string, add: (x: number, y: number) => number, substract?: (x: undefined, x1: number) => number };

multiMethodobj = {
    n1: 'Calculator', add: function (x1: number, y1: number): number {

        return x1 + y1;
    }
};
console.log(multiMethodobj.add(10, 20));

console.log(typeof multiMethodobj);


let multiMethodObj2: { n1: never, multiple: (y: undefined, x: string) => string };
multiMethodObj2 = {
    n1: '1' as never, multiple: function (y: undefined, x: string) {

        return `Hello ${x}`;
    }
};

console.log(multiMethodObj2.multiple(undefined, 'Nagendra'));

console.log(multiMethodObj2);


//object with nested object

let nestedObj: {

    id: number,
    details: {
        name: string,
        age: number
    }
} = {
    id: 1,
    details: { name: 'Nagendra', age: 25 }
};

console.log(nestedObj.details.name);

//nested object with method

let nestedObjWithMethod:{id:number,info:{name:string,add:(n1:number,n2:number)=>number}};

nestedObjWithMethod={id:1,info:{name:'Calculator',add:function(n1,n2){return 10+n2}}};
console.log(nestedObjWithMethod.info.add(10,20));

console.log(typeof nestedObjWithMethod);

//few  Obkect inbuild Methods


console.log(Object.keys(nestedObjWithMethod))
console.log(Object.keys(nestedObjWithMethod.info))

//console.log(Object.values(nestedObjWithMethod));

//console.log(Object.values(nestedObjWithMethod.info));