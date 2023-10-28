

// Class Super Constructor

class Employee {
    constructor (poshMan){
        this.firstName = poshMan
    }

    sayHello (poshGirl){
        console.info (`Hello, my name is ${this.firstName}`);
    }
}


/* class manager otomatis akan memiliki constructor dari class employee.
dan jika di class manager menambahkan constructor lagi, maka akan error. Agar tidak error makan tambahkan kata kunci super seperti dabawh*/
class Manager extends Employee { 
    constructor (param1, param2){
        super(param1);
        this.lastName = param2
    }

    sayHello (poshGirl){
        console.info (`Halo, perkenalkan namaku ${this.firstName} ${this.lastName}`);
    }
}



const irzi = new Employee("zuxcux", "keche");
irzi.sayHello("Irziii")
console.info(irzi)

const zaxchax = new Manager("zaxchax", "rahmatanlilalamin");
zaxchax.sayHello("Rahmat");
console.info(zaxchax);