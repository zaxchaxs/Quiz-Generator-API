

//Class Inheritance
//kata kunci extends

class Employee {

    sayHello (poshGirl){
        console.info (`Hello, my name is ${poshGirl}`);
    }
    sayHi (poshMan) {
    }
}

class Manager extends Employee {  //extends agar class manager mewarisi class class employee
    sayHello (poshGirl){
        console.info (`Halo, perkenalkan namaku ${poshGirl}`);
    }
}

const irzi = new Employee();
irzi.sayHello("Irziii")
console.info(irzi)

const zaxchax = new Manager();
zaxchax.sayHello("Rahmat");
console.info(zaxchax);