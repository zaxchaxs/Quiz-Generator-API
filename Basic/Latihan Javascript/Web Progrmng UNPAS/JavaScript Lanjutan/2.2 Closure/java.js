


{
    function init (){
        let nama = `zaxchax`;  // Locak Variable
        function tampilNama() {         // Inner Function (Closure)
            console.log(nama);          // Akses ke parent variable
        }
        tampilNama();
    }
    init();
}


{
    function inat() {
        function tampilNama(nama) {
            console.log(nama);
        }
        return tampilNama;
    }
    
}

const panggilNama = inat();
panggilNama(`Irzi Rahmatullah`)



{
    function ucapkanSalam(waktu) {
        return function(nama) {
            console.log(`Halo ${nama}, selamat ${waktu}`);
        }
    }
}

const pagi = ucapkanSalam(`pagi`);
const malam = ucapkanSalam(`malam`);

pagi(`Irzi Rahmatullah`)
malam(`zaxchax `)