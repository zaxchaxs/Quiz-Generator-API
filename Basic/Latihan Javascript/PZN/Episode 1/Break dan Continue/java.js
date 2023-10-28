/*Break untuk menghentikan sebuah LOOP atau perulangan.
Continue untuk menghentikan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya.*/

//Contoh Break
let irzi = 1;
while (true) {     //<<pakai true agar terus berulang.
    alert(irzi);
    irzi++;

    if (irzi > 5) {
        break;  //jika ditambahkan break, maka akan berhenti.
    }
}

//Contoh Continue
for (izi = 1; izi <=100 ; izi++) {
    if (izi % 2 === 0) {
        continue;
    }

    document.writeln("<p>Irzi ganjil nomor</p");
    document.writeln(izi);
}