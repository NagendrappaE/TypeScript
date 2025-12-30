class Laptop{
    serialNo:number;
    constructor(serialNo:number){
        this.serialNo=serialNo;
    }
}

type User={
    id:number,
}

interface Company{
     laptop:Laptop,
      user:User,
      name:string,
      city:string,
      totalEmployee():number

}




let paycorp:Company = {
    laptop: new Laptop(12345),
    user: { id: 101 },
    name: "PayCorp",
    city: "New York",
    totalEmployee: () => {
        return 500;
    }
};


let   totalEm:number=paycorp.totalEmployee();

