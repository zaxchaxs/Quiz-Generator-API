// menggunakan library Jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies),
//     error: () => {}
// })


// menggunakan ajax vanilla JavaScript

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         };
//     } else {
//         console.log (xhr.responseText);
//     };
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();


// Menggunakan fetch
// fetch ('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(data => data.json())
//     .then(parsedData => console.log(parsedData));

// copas code ini ke gpt, minta jelaskan. Dijamin langsung paham.


        
        // Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous dimasa yang akan datang.
// Biasanya dipakai ketika mau request ke API.
// - Janji      (terpenuhi / ingkar)
// - state      ( fulfilled / rejected / pending) -> di JavaScript
// - Callback   ( resolve / reject / finally) -> fungsi callback
// - aksi       ( .then / .catch) -> di fetch

// contoh 1 

// function callbackDitepati(param1) {
//     return console.log(`Anjai, kamu keren ${param1}`);
// };

// function callbackTakDitepati(param1) {
//     return console.log(`Lah, kamu kok ${param1}`);
// }

// let ditepati = true // / false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati.')  // ini isinya bisa apa aja, bisa request ke api/proses yg kompleks.
//     } else {
//         reject('ingkar janji')  // ini juga.
//     };
// });

// janji1
//     .then(callbackDitepati)
//     .catch(callbackTakDitepati);

// // Code ini bisa lu copy paste aja zi ke chat GPT minta jelasin, lu dulu ngerti kok.


// contoh 2

// testing 
// function callbackDitepati(param1) {
//     return console.log(`Bagus, kamu sudah menepati janjimu, meskipun ${param1}`);
// }
// function callbackTakDitepati(param1) {
//     return console.log(`Sangat tiidak baik, kamu tidak menepati janjimu ${param1}`)
// }
// function pending() {
//     return console.log(`Selesai menunggu beberapa waktu.`)
// }


let ditepati = false; 
const janji2 = new Promise((resolve, reject) => {
    if(ditepati) {
        setTimeout(() => {
            resolve("setelah menunggu beberapa waktu")
        }, 3000)
    } else {
        setTimeout(() => {
            reject("setelah menunggu beberapa waktu")
            }, 3000)
    };
});

console.log ("Mulai");
// console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(pending)
    //method finally akan selalu dijalankan jika then/catch sudah siap untuk ditampilkan.
    .then(callbackDitepati)
    .catch(callbackTakDitepati)
console.log('Selesai');



// Di promise juga ada method promise.all(). cek aja di (https://www.youtube.com/watch?v=wIrZq4Z9hLU&t=866s&ab_channel=WebProgrammingUNPAS), menit ke 16:45. kwkwkw

// contoh aja deh
// const movies = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([{
//             Tittle : 'Solehuding',
//             Sutradara : 'Caca',
//             Aktor : "Marsha"
//         }]);
//         reject(() => console.log(`Ini output reject.`));
//     }, 5000);
// })

// const kondisiBogor = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([{
//             Cuaca : "Cerah",
//             Suhu : "Dingin",
//             Jalan : "Macet"
//         }]);
//         reject(() => console.log(`Ini output reject.`));
//     }, 3000);
// });

// console.log(`mulai`)
// Promise.all([movies, kondisiBogor]) // nama array di parameter ini harus sama dengan nama variable yg menampung promise
//     .then( response => {
//         const [movies, kondisiBogor] = response;
//         console.log(kondisiBogor);
//         console.log(movies);
//     })
// console.log(`selesai`);