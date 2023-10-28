

//Property di Class
class Person {
    constructor(param1, param2) {
        this.firstName = param1     //ini property dengan menggunakan kata kunci this.
        this.lastName = param2
        console.info(`hello ${param1}, you're so fckin cool ${param2}.`)
    }

}

const HAHA = new Person("Irzi", "AF");
console.info(HAHA);
console.info(HAHA.firstName);

const HIHI = new Person("Zaxchax", "hehe");
console.info(HIHI.lastName);