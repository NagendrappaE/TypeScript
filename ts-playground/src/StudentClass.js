"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentA {
    name;
    age;
    //Property values either should be initialized during declaration or inside constructor
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
class MainClass {
    static main() {
        let s1 = new StudentA("John", 21);
        console.log(s1.name);
        console.log(s1.age);
    }
}
MainClass.main();
//# sourceMappingURL=StudentClass.js.map