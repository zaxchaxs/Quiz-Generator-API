/*
Property/data yang dianggap falsy dan truthy. Cek link dibawah. 
https://youtu.be/SDROba_M42g?t=13772*/

let data = "";//<<string kosong
if (data) {
    alert("True")  ;
} else {
    alert("False");
}
//Hasilnya akan false, karena string kosong dianggap false, tapi jika string tidak kosong dianggap true. Contoh.

let data2 = "True";//<<string terisi
if (data2) {
    alert("True");
} else {
    alert("False");
}
//hasilnya akan true


