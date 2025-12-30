  class StudentA {

    public name: string
    public age: number;

    //Property values either should be initialized during declaration or inside constructor
    constructor(n: string, a: number) {

        this.name = n;
        this.age = a;
    }



}


class MainClass{

    public static  main():void{
       let s1 = new StudentA("John", 21);
       console.log(s1.name);
       console.log(s1.age);
    }


}
MainClass.main();



