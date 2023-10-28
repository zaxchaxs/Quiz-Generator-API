

// Declarasi sebuah callback

// contoh 1
// function callbackFunction(a) {
//     const sayHi = document.createElement('h1');
//     sayHi.textContent = "Halo " + a;
//     document.body.appendChild(sayHi)
// }


// // funngsi pemanggil bagi fungsi callback
// function pemanggilCallback(callbackk) {
//     const input = prompt('Masukkan nama anda: ');
//     callbackk(input);
// }

// // melempar fungsi callback sebagai argumen
// pemanggilCallback(callbackFunction);



// Contoh 2

// function pemanggilCallback(callback) {
//     const name = prompt('Masukkan nama anda : ')
//     callback(name);
// };

// // fungsi callbacknya di declarasikan saat memanggil function pemanggil.
// pemanggilCallback(input => {
//     const text = document.createElement('h2');
//     text.textContent = `Halo ${input}, semoga harimu menyenangkan`;
//     document.body.appendChild(text);
// })


// contoh 3

// fungsi callbacknya
// function argumentFunction(color) {
//     const div = document.getElementById('color')
//     div.setAttribute('style', `background-color: ${color}`);
// }

// // function pengambil callback.
// function changeColor(callback) {
//     alert('Cobalah untuk input nama warna dalam bahasa inggris.');
//     const warna = prompt('example: red, blue, yellow, green, black, white, ect.');
//     callback(warna);
// }

// changeColor(argumentFunction);
// console.log('hi');


// contoh sort di array
// const list1 = ["Caca", "Marsha", "Abasat", "Zaxc", "Chax"];
// list1.sort();
// console.log(list1);

// const list = [1, 1231, 23, 41, 61, 4322, 24, 1111];
// // list.sort();
// list.sort((a, b) => a-b ); // jika sort() tidak menggunakan function lagi, maka akan error
// console.log(list)