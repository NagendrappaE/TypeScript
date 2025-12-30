//1. A Function That Always Throws an Error
function throwError():never{
    let out='A';
    throw Error('out of box');
   // return out;



}

//infinite loop which never exists


function hellow():never{

    while(true){
        console.log('Never')
      //   never exist
    }
}