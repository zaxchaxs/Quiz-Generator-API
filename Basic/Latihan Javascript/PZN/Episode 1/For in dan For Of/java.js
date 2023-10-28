

/*FOR IN
FOR IN digunakan untuk melakukan iterasi terhadap seluruh data property di object maupun array*/ 
const nama = {
    namaAwal: "Irzi",
    namaTengah: "Rahmatanlilalamin",
    namaAkhir: "hahe",
}

for(const property in nama){
    document.writeln(`<p>${property}</p>`);
}

document.writeln('<br></br>');
for(const property in nama){
    document.writeln(`<p>${nama[property]}</p>`); // harus seperti ini jika ingin mengetahui value nya

}
document.writeln('<br></br>');
document.writeln('<br></br>');



/*FOR OF
For of digunakan untuk melakukan iterasi terhadap isi value dari suatu property*/
const names = ["IrziRahmatullah", "hahaha", "hihiihi"]
    for(const character of names){
        document.writeln(`<p>${character}</p>`)
    }
