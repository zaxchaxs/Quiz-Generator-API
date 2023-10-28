

    // Callback
    // Callback adalah function yang dikirimkan sebagai parameter pada function yang lain.


    // Synchronous callback
    // mudah mudahan lo paham `diri gua sendiri`, ini lu belajar dulu puyeng banget sumpah dah.
    // jadi intiinya funct sayHi jadi sebuah argument untuk funct input.


    // Function ini dikirimkan sebagai parameter untuk function lain.
    function sayHi(nama) {
        alert(`Halo ${nama}, semoga harimu menyenangkan.`);
    }

    function input(callback) {
        const namaUser = prompt("Masukkan nama:");
        callback(namaUser);
    }


input(saKeyHi);

// bisa juga kaya gini
// input(nama => alert(`Halo ${nama}`) )



        // Asynchronous callback

// const mhs = [
//     {
//         "nama" : "Irzi rahmatullah",
//         "kelas" : "XII mipa 2",
//         "no-kartu" : "12131321"
//     },
//     {
//         "nama" : "marshadas adawada",
//         "kelas" : "XII mipa 2",
//         "no-kartu" : "1321839"
//     },
//     {
//         "nama" : "agus sumagus",
//         "kelas" : "XII mipa 3",
//         "no-kartu" : "13910391"
//     },
//     {
//         "nama" : "fazri sdkada",
//         "kelas" : "XII mipa 1",
//         "no-kartu" : "1231314"
//     },
//     {
//         "nama" : "hikal",
//         "kelas" : "XII mipa 4",
//         "no-kartu" : "123131"
//     },
// ];

// Ini masih synchronous, bukan async. 
// coba aja di refresh di console log, ini bakal blocking 
// console.log("mulai");
// mhs.forEach(m => {
//     // // kita buat pengulangan ga ngotak biar lama. 
//     for(let i = 0; i < 10000000; i++){ 
//         let date = new Date();
//     };
//     console.log(m.nama, m.kelas);
// });

// // code dibawah ini bakal lama untuk dieksekusi
// console.log("selesai");



// Asynchronous callback
// param succes dan error adalah callback, dan url misal adalah data yg diambil dari API

// bisa kaya gini pake ajax vanila JS

// function getDataMHS(url, succes, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.onreadystatechange === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         } else {console.log('ini karena onreadystatechange nya error, gatau kenapa. Ilmu si Irzi belum nyampe sono.')}
//     }

//     xhr.open('get', url);
//     xhr.send();
// };



// getDataMHS('dataMahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));

// }, () => {});



// Atau bisa pakai JQuery gini

console.log(`Mulai`);

// code ini akan paling bawah, karena menggunakan asynchronous.
$.ajax({
    url: 'dataMahasiswa.json',
    success: mhs => {
        console.log(mhs)
    },
    error: () => {}
})
console.log(`Selesai`)