 class StudentC{

//private constructor
    private constructor(salary:number){

        console.log(`Salary is : ${salary}`);
    }

    public static  getInstance():StudentC{

        return new StudentC(10000);
    }

}


let out=StudentC.getInstance();
console.log(out);