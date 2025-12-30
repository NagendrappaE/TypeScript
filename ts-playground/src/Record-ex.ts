let contactMap:Record<string, string>;

contactMap={
   '8892636021':'Nagendra',
   '7777777777':'Ayushi',
   '8888888888':'Kavitha',
    
}

console.log(contactMap);
//this find outs the key in map/object
for ( const k in contactMap ){
    console.log(k);  //this find out the key
    console.log(contactMap[k]); //this find out the value
}

//map entries

//type:

type hasId={
    id:string
}


function printId<T extends hasId>(item:T){
    console.log(item);
}

const hasId=printId({id:'12344',name:'Nagendra'});

//suppose if i try to pass with out id it will give compile time error

//const  withoutHasprop=printId({name:'Ayushi'});


//keyOF

type Person{
    name:string,
    aadhar:number
}

// we can have keys of name  aadhar
type personKeys=keyof Person;

let key1:personKeys='name';
let key2:personKeys='aadhar';


function PersonOps<T extends keyof Person>(inp:T){

    return 'Person Operations'+inp;
}


let person1=PersonOps('name');
let person2=PersonOps('aadhar');

function personObj<T extends Person> (inp:T):T{

    console.log(inp);
    return inp;
}

let  nagendra=personObj({name:'Nagendra', aadhar:123456789012}); 