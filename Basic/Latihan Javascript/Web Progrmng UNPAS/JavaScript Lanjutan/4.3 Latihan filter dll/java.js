

// ambil element list 
const videos = Array.from(document.querySelectorAll(`[data-durasi]`)); 

// pilih video js
const videoJS = videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`))

// ambil durasi masing2 video
.map( duration => duration.dataset.durasi)

// ubah durasi menjadi integer, lalu ubah menit ke detik
.map(waktu => {
    // split waktunya
    const parts = waktu.split(`:`).map(part => parseFloat (part));
    // ubah ke detik
    return parts [0] * 60 + parts[1];
})

// jumlahkan semua detik
.reduce((accu, cureValue) => accu + cureValue);

// ubah format menjadi jam, menit, detik
const jam = Math.floor(videoJS / 3600);
const menit = Math.floor((videoJS - 7200) / 60); 
const detik = videoJS - 8280;

// simpan di DOM
const jumlahVidJS = document.querySelector(`.jumlah-video`)
jumlahVidJS.textContent = `${videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`)).length} Videos`

const pDurasi = document.querySelector(`.total-durasi`) 
pDurasi.textContent = `${jam}:${menit}:${detik}`;
