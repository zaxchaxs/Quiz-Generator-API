

//Object
// https://youtu.be/oFTeb4Lkwek?t=2915
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object



//object.freeze
{
    const irzi = {
        namaDepan : "Irzi",
        namaBelakang : "Rahmatullah"
    };
    
    Object.freeze(irzi);
    
    irzi.namaTengah = "Zaxchaxs";
    console.info(irzi);
}


// object.Assign
{
    const haha = {
        firstName : "Irzi",
        middleName : "Rahmatullah",
        lastName : "Zaxchax"
    }
    const wow = {
        gaya1 : "Keche",
        gaya2 : "Badai"
    }

    const ObjectAssign = Object.assign (haha, wow); //jadi object yg ada di wow, di copy dan di paste ke haha.
    
    console.info(ObjectAssign);

}



