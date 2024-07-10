"use strict";
//  ================ OOP (Object Oriented Programing) step11 =================
// class is a blue print of our code
class house {
    constructor(name, num, cnic) {
        this.ownerName = name;
        this.houseNumber = num;
        this.ownerCNIC = cnic;
    }
}
// new is use to create an object.
let h1 = new house("Ahmad", 2334, 137787987);
let h2 = new house("Umer", 5689, 8786745);
// h1.ownerCNIC = 989675;
// h2.houseNumber = 1234;
console.log(h1);
console.log(h2);
console.log(h2.houseNumber);
// ======================== Inheritance ========================
class animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("Walking......");
    }
    eat() {
        console.log("Eating food");
    }
    sleep() {
        console.log("Sleeping");
    }
}
class dog extends animal {
    constructor(name, isWafadar) {
        super(name);
        this.isWafadar = isWafadar;
    }
    woof() {
        console.log(`${this.name} woof woof`);
    }
}
let d1 = new dog("Tommy", true);
console.log(d1);
let d2 = new dog("Spike", false);
console.log(d2);
d1.woof();
class cat extends animal {
    meow() {
        console.log("Meow....");
    }
}
let c1 = new cat("mano");
c1.meow();
console.log(c1);
