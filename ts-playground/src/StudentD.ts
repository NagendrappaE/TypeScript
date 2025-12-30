class StudentD {
     x: unknown = null;

    //default parameters are defined at class body  name,designation,experience cant access we did not added either private/public
    constructor(public name: string, private designation: string, experience: number) { }

    //non static method
    public display() {

        console.log(`hellow ${this.designation}`);
    }

    //getter 

    public get getName(): string {
        return this.name;
    }
    //setter method to variable

    public set setName(newname: string) {
        this.name = newname;
    }

    //designation set 

    public set setDesignation(newdesignation: string) {
        this.designation = newdesignation;
    }

    public get getDesignation(): string {
        return this.designation;
    }

}

//let me access object


let s1 = new StudentD("John", "Developer", 5);
 console.log(s1);

 //setting values 

 s1.setName = "Mike";

 console.log(s1);

 //both are same
 s1.name='Nagendra';

  console.log(s1);

 //setting private designation not possible

 //setting via setter of private variable designation

 s1.setDesignation = "Senior Developer";

 console.log(s1)



    

