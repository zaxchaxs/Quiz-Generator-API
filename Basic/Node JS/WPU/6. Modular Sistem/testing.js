

const nama = 'Zaxch';

function sayHi(name) {
    return console.log(`Halo, nama saya ${name}. Atau kamu bisa panggil aku`);
};


// Kita tidak bisa export module seperti ini

// module.exports = nama;
// module.exports = sayHi;

// Jadi lebih baik seperti ini.
module.exports.sayHi = sayHi;
module.exports.nama = nama;


// another case

const biodata = {
    nama : "Irzi Rahmatullah",
    kelas : "1B",
    prodi : "Informatika",
    fakultas : "Ilmu Komputer",
    sayHello() {
        return `Halo, nama saya ${this.nama}, dari prodi ${this.prodi} fakultas ${this.fakultas}`;
    }
};
module.exports.biodata = biodata;


// Oke dari pada harus export banyak seperti diatas, kita bisa menggunakan object. Caranya:
module.exports = {
    nama: nama,
    sayHi: sayHi,
    biodata: biodata,
};

// Di ES 6 pun bisa lebih singkat, kalo nama properti dan value nya sama. Caranya 
module.exports = {nama, sayHi, biodata,};