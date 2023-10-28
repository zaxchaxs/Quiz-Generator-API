


// // Konsep this pada arrow function


// //Constructor function
// const Pelajar = function() {
//     this.nama = `Irzi Rahmatullah`;
//     this.umur = 19;
//     this.sayHello = function() {
//         console.log(`Hello ${this.nama}, saya berumur ${this.umur} tahun.`)
//     }
// }
// const Mahasiswa = new Pelajar();



// Aplikasi this arrow function in real
    const box = document.querySelector(`.box`);
    box.addEventListener(`click`, function() {
        this.classList.toggle(`size`);      // toggle ini akan menambahkan/hapus class size
        setTimeout( () => {             // ini hrus pakai arrow function, karena gaada konsep this pada arrow function. Jadi si arrow function....(ra paham lagi)
            this.classList.toggle(`caption`)
        }, 500)
    })



