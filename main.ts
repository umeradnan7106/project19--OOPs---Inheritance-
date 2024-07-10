//  ================ OOP (Object Oriented Programing) step11 =================

// class is a blue print of our code

class house {
    houseNumber: number ;
    ownerName: string ;
    readonly ownerCNIC: number; // readonly is use to give error to change the value 
    // no initialize , but no error (!:) and (?:) is optional
    numberOfDoors !: number;
    constructor(name:string , num:number , cnic:number){
        this.ownerName = name
        this.houseNumber = num
        this.ownerCNIC = cnic
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


class animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    walk(){
        console.log("Walking......")
    }
    eat(){
        console.log("Eating food")
    }
    sleep(){
        console.log("Sleeping")
    }
}

class dog extends animal{
    isWafadar: boolean
    constructor(name: string, isWafadar: boolean){
        super(name)
        this.isWafadar = isWafadar
    }
    woof(){
        console.log(`${this.name} woof woof`) 
    }
}
let d1 =  new dog("Tommy",true)
console.log(d1)
let d2 =  new dog("Spike",false)
console.log(d2)
d1.woof();


class cat extends animal {
    meow(){
        console.log("Meow....")
    }
}
let c1 = new cat("mano")
console.log(c1)
c1.meow();