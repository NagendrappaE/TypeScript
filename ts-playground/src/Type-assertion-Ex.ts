//type assertion
let  payment={id:123,accName:'nagendra'};

const fpdPayment=payment as {id:number,accName:string};

// 1. Angle-bracket syntax (Only works in .ts files, not .tsx)

let someString:any='Hellow how are you';

let stringlength=(<string>someString).length;

console.log(stringlength)

// 2. 'as' syntax (Preferred, works in .ts and .tsx)

let stringConverted= someString as string;

//let me find out the length

let len:number=stringConverted.length;
console.log(len)

// 3. Type assertion with DOM elements
try{

    let inputD:any=document.querySelector('input[type="text"]');

if(inputD){
   let htmlInp= inputD as HTMLInputElement;
   console.log(htmlInp);
}
}catch(err:unknown){

    if(err instanceof Error){
        console.log('error occured'+err);
    }

}

//4 type assertion on union type

let numOrString:number| string=1;
//forced to become number 
let forcedStr= numOrString as number;













