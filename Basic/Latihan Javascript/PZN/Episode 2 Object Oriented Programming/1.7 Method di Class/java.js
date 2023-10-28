

// Method/function di Class

class Person {
    constructor(param1, param2) {
        this.firstName = param1
        this.lastName = param2
    }

    sayHello(parameter1) {    //tanpa menggunakan kata function, dan akan nempel di prototype bukan di intens object.
        document.writeln(`Hi ${parameter1}, have a great day.`);
    }

}

const HAHA = new Person("Irzi", "AF");
console.info(HAHA)
HAHA.sayHello("Irzii")

