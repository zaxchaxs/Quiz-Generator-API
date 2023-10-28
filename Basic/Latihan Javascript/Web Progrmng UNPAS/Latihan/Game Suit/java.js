
// // Game Suit

let tanya = true;
while  (tanya) {

        // menangkap pilihan player
    let hand = prompt(`Silahkan pilih: Batu, Kertas, Gunting \nPakai awalan kapital ya:)` );


    //menangkap pilihan pilihan komputer
    let computer = Math.random();

    if (computer < 0.34){
        computer = `Batu`;
    } else if (computer < 0.50) {
        computer = `Kertas`;
    } else {
        computer = `Gunting`;
    };



    // rules permainan
    let hasil = ``

    if (hand == computer) {
        hasil = `SERI`;
    } else if (hand === `Batu`){
        if (computer === `Kertas`) {
            hasil = `KALAH`;
        } else {
            hasil = `MENANG`;
        }
    } else if (hand === `Kertas`) {
        if (computer === `Batu`){
            hasil = `MENANG`;
        } else {
            hasil = `KALAH`;
        }
    } else {
        hasil = `memasukkan isi yang salah. Kocag, yang bener napa`;
    }


    alert (`Kamu memilih ${hand} dan komputer memilih ${computer} \nKamu ${hasil}`)

    tanya = confirm(`Lagi gak?`);


}
alert(`Terimakasihhhhhhh`);





