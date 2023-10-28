

        // Async
    // asynchronous function adalah sebuah funtion yang bekerja secara asyncronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return valuen nya menggunakan penulisan yang syncronous.
    // * Fungsi yang berjalan secara syncronous
    // * Menghasilkan (implisit) promise
    // * Cara penulisannya sama seperti synchronous function(function biasa).


    // Cara biasanya
// const test = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Selesai')
//     }, 3000);
// });
// test
//     .then(() => {
//     console.log(test)
// })
//     .catch(() => console.error('Error!!!'))




// Cara dengan menggunakan async await. Tanpa then dan catch

// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Selesai!');
//         }, 2000)
//     });
// };

// // "JS, didalam fungsi ini bakal ada code yang asyncronouse." JS nya siap nunggu ada keyword await.
// async function cobaAsync() { 
//     // "yg ini loh JS yang asnyc"
//     const testing = await cobaPromise();
//     console.log(testing); // output tidak akan pending lagi
// };
// cobaAsync();



        // Error Handling
//pada async await, karena tidak ada seperti (then/catch).
 
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = false;
        if (waktu) {
            setTimeout(() => {
                resolve('Selesai!');
            }, 2000);
        } else {
            setTimeout(() => {
                reject('Lama bgt broh');    
            }, 3000);
            
        };
    });
};

// Cara menjalankan resolve dan reject di async await seperti ini.

// jadi key 'try' untuk menjalankan yg resolve, dan catch untuk menjalankan yg reject.
async function cobaAsync() {
    try{
    const coba = await cobaPromise();
    console.log(coba);
    } catch(err) {
        console.log(err);
    };
};
cobaAsync()