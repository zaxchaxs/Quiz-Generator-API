

//Public class field
 
class PoshMan {
    firstname = "Irzi";
    lastname = "Rahmatullah"
    balance = 0;
}

const Irzi = new PoshMan();
// isi dari class poshman otomatis akan nempel di instense object const Irzi, bukan di property nya. Karena menggunakan balance = 0.
console.info(Irzi);



// another
class PoshGirl {
    firstname = "Irzi";
    lastname = "Rahmatullah"
    balance = 0;

    constructor (firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}

const Zaxchax = new PoshGirl("zaxhchax", "rhmtllh");
console.info(Zaxchax)