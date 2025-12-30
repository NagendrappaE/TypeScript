var Animal = /** @class */ (function () {
    function Animal(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Animal.prototype.makesSound = function () {
        return "its makes noise with animal name" + this.name;
    };
    Animal.makesSoundS = function () {
        return "its makes noise with animal name" + Animal.age;
    };
    return Animal;
}());
var cat = new Animal('Cat', 4);
console.log(cat.name);
console.log(cat.makesSound());
console.log(Animal.age);
