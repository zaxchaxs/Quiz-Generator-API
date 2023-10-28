

// 5.1 Template Literals
// Tentang back-tick (``)


const x = 10

console.log(`${(x % 2 === 0) ? `Genap` : `Ganjil`}`)


const el = document.querySelector('#body')

const saya = {
    nama : "Irzi Rahmatullah",
    umur : "19 Tahun",
}

// el.textContent=`<div class="saya">
// Halo, nama saya ${saya.nama}, umur saya ${saya.umur}</div>`
console.log(`Halo, nama saya ${saya.nama}, umur saya ${saya.umur}`)

