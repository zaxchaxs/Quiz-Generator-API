


//Getter and Setter in Class

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    
    set fullname (value){
        const result = value.split(" ")
        this.firstname = [0];
        this.lastname = [1];
    }
}

const irzi = new Person("Irzi", "Rahamatullah");
console.info(irzi);