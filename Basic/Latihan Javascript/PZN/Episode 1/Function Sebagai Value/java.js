
//Function Sebagai Value
//function bisa kita masukkan kedalam variable


function sayHello(parameter1) {
    document.writeln(`<p>Halo ${parameter1}`);
}

let variable1 = sayHello;

sayHello("Irzi") //untuk memanggil function bisa seperti ini.
variable1("Izi") //bisa juga seperti ini.


//FUNCTION di Parameter

function giveMeName(parameter12){
    parameter12("Zirrah");
}

giveMeName(sayHello); //function sayHello diatas jadi parameter giveMeName
giveMeName(variable1) //bisa juga seperti ini, karena sayHello masuk kedalam variable (variable1)