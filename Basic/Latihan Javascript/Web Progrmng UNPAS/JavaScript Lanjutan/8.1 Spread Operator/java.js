

        // 8.1 Spread Operator

// Yaitu operator yang meng expand iterables menjadi sebuah single element.

const mhs = [`irzi`, 'caca', 'cici', 'cucu'];
// console.log(...mhs);

// kita ambil index ke 0, dan karena string itu iterable jadi bisa dipecah juga.
// console.log(...mhs[0]);

// const dosen = ['hendra', 'basar', 'michael','sopo'];
// const gabungan = [...mhs, ...dosen, ...dosen[2]];
// const gabungan = [...mhs, 'zaxchax', ...dosen, ...dosen[2]];

// const gabungan = mhs.concat(dosen);
// console.log(gabungan);



// Mengcopy array

// sebenernya bisa di copy seperti ini, tapi ini bukan benar benar meng-copy.
// const mhsCopy = mhs;
// mhsCopy[1] = 'Marsha';
// output mhsCopy dan mhs akan sama.

// console.log(mhs);
// console.log(mhsCopy);


// const mhsCopy = [...mhs];
// mhsCopy[1] = 'marsha';

// console.log(mhs);
// console.log(mhsCopy);



const list = document.querySelectorAll('.list')

// const arrayList = [];
// for (let i = 0; i < list.length; i++) {
//     arrayList.push(list[i].textContent);
// }
// console.log(arrayList);

// Pakai spread operator
// const mahasiswa = [...list].map(m => m.textContent);
// console.log(mahasiswa)



// kita akan membuat hover h1 per huruf

const nama = document.querySelector('.nama');
const perHuruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = perHuruf;
console.log(perHuruf);