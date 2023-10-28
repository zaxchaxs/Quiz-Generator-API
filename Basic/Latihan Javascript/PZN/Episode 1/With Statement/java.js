//With statement untuk memanggil property dengan simple

//Contoh tanpa with statement
const irzi = {
    manusia: "Memang",
    orang: "Tentu",
    Tumbuhan: "Bukan"
}
document.writeln(irzi.manusia)
document.writeln(irzi.orang)
document.writeln(irzi.Tumbuhan) //harus memakai (.)
document.writeln("<br>")
document.writeln("<br>")



//Menggunakan with statement
const smanic = {
    monyet: "smanic",
    sekolah: "lumayan",
    lapangan: "elek"
}
with (smanic) {
    document.writeln(monyet)
    document.writeln(sekolah)
    document.writeln(lapangan) //tanpa menggunakan titik
}