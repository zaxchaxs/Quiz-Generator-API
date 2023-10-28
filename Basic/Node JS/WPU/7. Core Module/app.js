
// Core Module
// File System
const fs = require('fs');


// Membuat folder

// fs.mkdir('./Testing folder', err => {
//     if(err){
//         console.error('Gagal membuat folder', err)
//     } else {
//         console.log('Berhasil membuat folder.')
//     };
// });

// Menuliskan string ke file secara synchronous
// file "test1.text dibuatkan."
// fs.writeFile('Testing folder/test1.txt', 'Ini isi testing nyaa yaaaa....', (e) => {
//     console.log(e)
// });



// Membaca isi file (Synchronous)
// Code dibawah ini bisa dijalankan jika 2  code diatas sudah di eksekusi.

// const isiData = fs.readFileSync('Testing folder/test1.txt');
// console.log(isiData.toString());



// Membaca isi file (async)
// fs.readFile('Testing folder/test1.txt', (err, data) => {
//     if (err) throw err;
//     else console.log(data.toString());
// });



// Read Line 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Saya akan meramal nama anda, untuk itu \nSilahkan masukkan nama anda : ', namaUser => {
    rl.question('Sekarang masukkan umur anda : ', umurUser => {
        console.log('Bentar lagi ramal...');
        setTimeout( () => {
            console.log(`Saya ramal nama anda adalah ${namaUser}, dan umur anda adalah ${umurUser}`);
        }, 3000);
        setTimeout( () => {
            console.log('Saya juga telah memasukkan nama dan umur anda kedalam data.json');    
        }, 4000)
       
        // Menambahkan value kedalam data.json
        const data = {
            nama : namaUser,
            umur : umurUser
        };
        const strngData = fs.readFileSync('data.json', 'utf-8');
        const objc = JSON.parse(strngData);
        objc.push(data);

        fs.writeFile('data.json', JSON.stringify(objc), (err) => {
            if (err) throw err;
        })
    });
    rl.close;
});
 