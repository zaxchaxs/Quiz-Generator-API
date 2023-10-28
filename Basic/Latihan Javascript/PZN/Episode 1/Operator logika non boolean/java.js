//Operator logika AND (&&) dan OR (||) sering digunakan untuk tipe data non boolean. Contoh:

//OR(||)
document.writeln("benar" || -0) //diambil yang kiri, karena truthy
document.writeln("</br>");
document.writeln("" || "irzi" || -0) //diambil yang tengah, karena yang awal falsy.
document.writeln("</br>");
document.writeln(-0 || false || undefined || null); //karena semua falsy, diambil yg paling kanan.
document.writeln("</br>");
document.writeln("</br>");

//example penggunaan
let name = {
    firstName: "Irzi",
    secondName: "Izi",
    thirdName: "Rahmatullah",
    fouthName: "Zaxchax"
};
document.writeln(name.namaAwal || name.namaKedua || name.thirdName || name.fouthName);
document.writeln("<hr>");
document.writeln("</br>");



//AND(&&)
//kebalikan dari OR(||), AND(&&) akan mengambil nilai falsy yang pertama.
document.writeln("benar" && null) //diambil yang kanan, karena false
document.writeln("</br>");
document.writeln("undefined" && undefined && null) //diambil yang tengah, karena yang awal truthy.
document.writeln("</br>");
document.writeln("Null" && true && "<p>lorem" && 205); //karena semua truthy, diambil yg paling kanan.
document.writeln("</br>");
document.writeln("</br>");