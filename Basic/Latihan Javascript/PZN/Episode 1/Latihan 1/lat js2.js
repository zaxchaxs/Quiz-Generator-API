//                                                                  Programer zaman now

// tipe data string, number dan boolean

document.writeln("Hellow World");
document.writeln("</br>");
document.writeln(123);
document.writeln("</br>");
document.writeln(true);
document.writeln(false);
document.writeln("</br>");
document.writeln("</br>");

// escape sequence
document.writeln("<textarea cols='100' rows='10'>");
document.write("Irzi \nRahmatullah \n");
document.write("\\awkoakowa\\");
document.writeln("\n cara menjadi \"Spiderman\" di era 'digital'");
document.writeln("</textarea>");
document.writeln("</br>" + "</br>");

//variable
var myName;
var school;
var places;
var noPhone;
var sheesh = " Anjay";
var br = "</br>";

myName = "Irzi";
school = "smanic";
places = "bogor";
noPhone = 1234;

document.write(
  "My name is " +
    myName +
    " I live at " +
    places +
    ". \n And I school at " +
    school +
    " my phone number is " +
    noPhone +
    sheesh +
    br +
    br
);

/* Let & Const (Variable). Let&Const sama aja kaya variable
  hanya jika pakai const, data const gabisa diubah.*/
let tes = 123;
tes = 1234; //bisa dirubah
const testing = 123;
//testing = "1234"; >>> error di console
//
//

//Operator MTK
// untuk simbolnya bisa cari di gugel 'operator aritmatika JS'
let angka = 125 + 772;
document.writeln(" 200 < " + angka + br);
angka = angka / 20;
document.writeln("200 > " + angka + br);
angka += 200; //bisa gini juga
document.writeln("200 < " + angka + br + br);

/*Operator perbandingan & Logika
untuk simbolnya bisa di cari di gugel 'operator perbandingan & Logika'*/
let ope = 23 == "23";
document.writeln(ope + br);
ope = 50 === "50";
document.writeln(ope + br);
ope = 50 !== "50";
document.writeln(ope + br + br);

let nilaiMTK = 80;
let nilaiPAI = 80;
let rapotMTK = nilaiMTK >= 75;
let rapotPAI = nilaiPAI >= 90;
let lulus = rapotMTK && rapotPAI;
document.writeln("Apakah Irzi akan lulus tahun ini? " + lulus + br);
const tamat = rapotMTK || rapotPAI;
document.writeln("Apakah Irzi akan lulus tahun ini? " + tamat);

/*String tamplet ${}, untuk memudahkan agar tidak '+' di saat 
ingin menambahkan string*/

//
//Tipe Data Array
let ohayo = ["Halo"];
ohayo.push("Irzi", "Rahmatullah");

console.table(ohayo);

ohayo[0] = "Hi";
ohayo[2] = "Zaxchax";

console.table(ohayo);

//Tipe Data Object
const lesgo = {
  Nama: "Irzi Zaxchax",
  Fetish: "Gatau",
  Umur: 128,
};

lesgo["Nama"] = "Irzi Rahmatullah";
lesgo["Fetish"] = "Tak tau";
lesgo["Umur"] = 18;

console.table(lesgo);

//If & Else//
const questionn = { question };
