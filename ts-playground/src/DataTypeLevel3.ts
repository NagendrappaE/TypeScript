type Employee={
    eid:number,
    ename:string,
    esal:number
}

type Address={
    state:string,
    city:string,
    pin:number
}


interface  EmployeeService{
   emp:Employee,
   operatioName:string
 
}

let nagendra:EmployeeService={
    emp:{eid:203,ename:'Nagendra',esal:50000},
    operatioName:'Operation 1'
}
