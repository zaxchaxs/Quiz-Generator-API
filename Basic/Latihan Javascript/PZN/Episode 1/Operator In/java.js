/* untuk mengetahui apakah dalam sebuah variable ada property yang kita tuju, 
tanpa memperhatikan value dari variable itu ada atau tidak. Jadi akan tetap dihitung TRUE*/


const myname = {
    firstName: "Irzi",
    lastName: "Rahmatullah"
};

if ("firstName" in myname) {
    alert("Hello Irzi");
} else {
    alert("Lah kamu siapa?")
}

//jika tidak ada
const myname2 = {
    namaAwal: "Zaxchax",
    namaAkhir: "hihiheha"
};

if ("namaTengah" in myname2) {
    alert("Hello zaxchax");
} else {
    alert("Lah kamu siapa?")
}