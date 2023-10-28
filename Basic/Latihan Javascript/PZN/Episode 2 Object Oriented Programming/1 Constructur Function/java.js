

//Constructur Function
// Di JS lama, kita membuat class itu menggunakan function, yaitu Constructur Function.
//contoh


//dalam Constructur Function, menggunakan uppercase text. Misal  "funtion PremiumMembers"
{   function Person (param1, param2) {   
        this.firstName = param1;
        this.middleName = param2;
    }


//memakai kata kunci "new"
    const pacul = new Person("Irzi", "Rahmatullah");  
         pacul.firstName = "Zaxchaxs"      //value nya berubah jadi zaxchaxs


    const arit = new Person(`Irzi`);
        arit.middleName = "Rahmatanlilalamin"


    console.log(pacul);
    console.log(arit); 
}   



// kita juga bisa menambahkan function didalam contructor function.
{   function PoshMan (param1, param2) {   
    this.firstName = param1;
    this.middleName = param2;
    this.sayHello = function (names) {
        console.info(`Hello ${names}, my name is ${this.firstName}`)
    }
}


const pacul = new PoshMan("Irzi", "Rahmatullah");  
     pacul.firstName = "Zaxchaxs"    
     pacul.sayHello("Caca")


const arit = new PoshMan(`Irzi`);
    arit.middleName = "Rahmatanlilalamin"
    arit.sayHello("Marsha")

console.log(pacul);
console.log(arit); 
}   




