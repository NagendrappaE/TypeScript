class Animal{

    public name:string;
    private  weight:number;

    public static age:number;

    constructor(name:string, weight:number){
        this.name=name;
        this.weight=weight;
    }

    //non static 
    public makesSound():string{
        return "its makes noise with animal name" + this.name;
    }

    // static method
    public static makesSoundS():string{
        return "its makes noise with animal name"+ Animal.age;
    }

    public set setName(name:string){
        this.name=name;
    }

     public get getName():string{
        return this.name;
    }

}

class Dog extends Animal{
    public breed:string;

    constructor(name:string, weight:number, breed:string){
        super(name, weight);
        this.breed=breed;
    }

    public makesSound():string{
        return "Woof! Woof! My name is " + this.name + " and I am a " + this.breed;
    }
}



let cat=new Animal('Cat', 4);
cat.setName= 'Kitty';
console.log(cat.getName);
console.log(cat.makesSound());

console.log(Animal.age);


