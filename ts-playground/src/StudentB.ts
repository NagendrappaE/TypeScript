class StudentB{

    constructor(sname:string,isValid:boolean,mobile:number){

    }

    public disaplay(){

        console.log("Hellow my name ");

    }

    public addSurName():string{
      
      return "always same";


    }

}


let s1=new StudentB("John",true,111111);
s1.disaplay();
s1.addSurName();