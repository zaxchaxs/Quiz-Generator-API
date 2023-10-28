

//Object Method
//Function bisa kita masukkan kedalam property Object. Contoh



//cara pertama
const gelas = {
    name: "Irzi",
    sayHallow: function (param) {    //memakai function anonymous
        document.writeln(`Hello ${param}`);
    }
}

gelas.sayHallow("Rahmatullah");



//cara kedua
const jaka = {
    names: "Zahxchax"
}

jaka.pangsyen = function (param1){
    document.writeln(`<p>Hallo ${param1}`);
}

jaka.pangsyen("Zirrah");