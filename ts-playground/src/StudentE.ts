class StudentE{
   num:number=0
     //there will be default contructor
    //setter 

    public set setNum(v1:number){
        this.num=v1;
    }
     
    public get getNum():number{
        return this.num;
    }


}

let x=new StudentE();
x.setNum=5;
console.log(x.getNum);
