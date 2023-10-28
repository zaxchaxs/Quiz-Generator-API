


        // 7.1 For of


// For of untuk melooping object yang iterables, sedangkan for in untuk melooping object property.

// For of 

const mhs = ['Irzi', 'caca', 'cici'];
// Array

// for (let i = 0; i < mhs.length; i++) {
//         console.log(mhs[i])
        
// }

// mhs.forEach(m => {
//         console.log(m)
// });

// for (const m of mhs) {
//         console.log(m);
// }


// String
// const nama = 'Irzi Rahmatullah';
// for (const n of nama) {
//         console.log(n);  
// }

// Parameter ke 2/i menjadi index.
// mhs.forEach((m, i) => {
//         console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// menit 8:24
// for (const [i, n] of mhs.entries()) {
//         console.log(`${n} adalah mahasiswa ke ${i + 1}`);
// }


// Node List
const list = document.querySelectorAll('.list');

// list.forEach(listt => {
//         console.log(listt.textContent);
        
// });

// for (const n of list) {
//        console.log(n.textContent + '1');
// }; 


// Arguments menit 11:55
function penjumlahan() {
        let jumlah = 0;
        for (const a of arguments) {
                jumlah += a;
        }
        return jumlah;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 100));