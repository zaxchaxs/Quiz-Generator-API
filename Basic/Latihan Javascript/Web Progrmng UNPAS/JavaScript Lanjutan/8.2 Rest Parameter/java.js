

    // 8.2 Rest Parameter
// Yaitu mepresentasikan argument pada function dengan jumlah yg tdk terbatas menjadi sebuah array.

// function myFunction(a, b, c, ...n) {
//     return n;   // menjadi array
// }

// console.log(myFunction(1,2,3,4,5,6,7,12321,312321,312,312));





// function jumlahkan(...angka) {
//     let total = 0
//     for (const a of angka) {
//         total += a;
//     }
//     return total;
// }

// console.log(jumlahkan(1,2,3,4,5,6,7,8,9,10))




    // Array Destructuring

// const grup1 = ['irzi', 'caca', 'cici', 'dede', 'sasa'];

// const [ketua, wakil, ...anggota] = grup1;

// console.log(anggota);


    // Object destructuring

const team = {
    ketua : 'Irzi',
    wakil : 'sasa',
    wakil3 : 'rahmat',
    produser : 'cici',
    sekertaris : 'caca',
    marketing : 'dede'

}

// console.log(ketua); 
// akan error

const {ketua, wakil, wakil2 = 'zaxchax' /*nilai default*/, produser, sekertaris, ...lainnya} = team
console.log(lainnya);
console.log(ketua);
