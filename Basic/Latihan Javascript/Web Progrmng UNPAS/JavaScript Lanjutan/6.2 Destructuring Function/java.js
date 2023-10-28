

// 6.2 Destructuring Function



// function penjumlahanPerkalian(a, b) {
//     return [ a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2,3);
// console.log(jumlah); // output nya akan berbentuk array.


// // dengan destructuring
// const jumlah2 = [tambah, kali] = penjumlahanPerkalian(5, 5);
// console.log(tambah);
// console.log(kali)






// // Contoh Lain
// function aritmatika(a, b) {
//     return [a + b, a - b, a * b, a / b, a + b + b, a * b / b];
// };

// const [plus, minus, point, bagi, ...others] = aritmatika(10, 5);
// console.log(point);
// console.log(plus + point);
// console.log(others);

// function aritmatika(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         // kali: a * b,
//         bagi: a / b
//     };
// };

// const {kali = 'tidak ada', bagi, kurang, tambah} = aritmatika(5, 5);
// console.log(kali);





    // Destructur function Arguments
    
// const mhs1 = {
//     nama: `irzi`,
//     umur: 19,
//     email: `kakaka@gmail.com`
// };

// function cetakMhs(nama, umur){
//     return `Halo nama saya ${nama}. Saya berumur ${umur} tahun.`
// };

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


    // // dengan menggunakan destructuring
const mhs1 = {
    nama: `irzi`,
    umur: 19,
    email: `kakaka@gmail.com`,
    nilai: {
        tugas: 87,
        uts: 80,
        uas: 90
    }
};

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `Halo nama saya ${nama}. Saya berumur ${umur} tahun. Nilai UAS saya ${uas}`
};
// parameter 'nilai' diatas di destructuring lagi.

console.log(cetakMhs(mhs1));
