

// Cara menjalankan file index dan file coba secara bersamaan pake require();

// Kita tidak bisa memanggil function dari file coba, karena node menggunakan sistem module.
// Agar bisa diakses bisa dengan : module.exports = cetakNama;   di file coba.

const cetakNama = require('./coba');
const nama = "Irzi Rahmatullah";

function testing (arg) {
    console.log(`halo saya ${arg}, dari file index.`);
};

cetakNama(nama);
testing(nama);