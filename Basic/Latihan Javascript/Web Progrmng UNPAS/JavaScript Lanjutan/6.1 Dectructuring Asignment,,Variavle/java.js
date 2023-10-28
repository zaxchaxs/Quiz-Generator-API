

/* Yaitu expression/syntac pada js yg membuat kita bisa membongkar nilai dari array,
atau property dari object kedalam variable terpisah. */


const coba = [`Satu`, 'Dua', 'Tiga', 'Empat'];

const [a, b, c, d] = coba;
// const [a, , , d] = coba;
// b dan c akan di skip.

console.log(a);
console.log(b);
console.log(c);


// // Swap Items
// let a = 1;
// let b = 2;
// console.log(a); //output 1
// console.log(b); //output 2

// [a, b] = [b, a]; // di swap
// console.log(a); //output 2
// console.log(b) //output 1




const mahasiswa = {
    nama: 'Irzi Rahmatullah',
    umur: '19',
    email: 'blalbalba@gmail.com'
};


// Pada Object
const {nama, umur, email} = mahasiswa;
console.log(nama);
console.log(email);
console.log(umur);