//when we  dont know the datatype
let ds:unknown;

ds=5;
//it will aboid the typecasting 
if(typeof ds==="number"){
    let out=ds/5;
    console.log(out);
}

let accName:unknown;

accName="John";

if(typeof accName==="string"){

    let upperCase=accName.toUpperCase();
    let lengthS=accName.length;

    console.log(upperCase);
    console.log(lengthS);

}

//unknown with object

let mandate:unknown={
    id:1,
    name:"Mandate",
    isActive:true
}


//type assertion

if(typeof mandate==="object" &&mandate!=null){

    let mandateObj= mandate as {id:number,name:string,isActive:boolean};

    console.log(mandateObj.id);
    console.log(mandateObj.name);
    console.log(mandateObj.isActive);
}



//try catch 


try{

    let x=-1/0+'X';
        throw new Error("Something went wrong");
}catch(err:unknown){
  if(err instanceof Error){
      console.log(err.message);
  }
}


//unknow return type


function ParseJason(json:string):unknown{
        return JSON.parse(json);
}


let finalout=ParseJason("{\"bankName\":\"Hello World\"}");


if(typeof finalout==="object" &&finalout!=null){

     let message=finalout as {bankName:string};

     console.log(message.bankName);

}

//Like java casting


let payment:unknown={

    debitAccNum: 1234567890,
    creditAccNum: 122222
}


let transcation1= payment as {debitAccNum:number,creditAccNum:string}

console.log(transcation1.debitAccNum);
//console.log(transcation1.creditAccNum.toUpperCase());//this can Give error

//normalise payment toString

let paymentString= String(transcation1.creditAccNum);

console.log(paymentString.toUpperCase());

//option 2


interface Payment{
    debitAccNum: number;
    creditAccNum: string;
}

function validateResponse(response:unknown):response is Payment{
    if(typeof response==="object" && response!==null){
        let payment=response as Payment;
        return typeof payment.debitAccNum==="number" && typeof payment.creditAccNum==="string";
    }
    return false;
}

if(validateResponse(payment)){
    console.log("Valid payment response");
}else{
    console.log("Invalid payment response");
}


let final1=validateResponse(payment);

console.log(final1);


//arrays 

let arrays:unknown=["A",1,true,'B'];

if(Array.isArray(arrays)){
    arrays.forEach((x)=>console.log(x))
}
