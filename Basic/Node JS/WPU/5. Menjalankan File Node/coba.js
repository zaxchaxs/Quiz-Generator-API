const nama = 'Irzi Rahmatullah';

function cetakNama(name){ 
    setTimeout( () => {
      console.log(`Hi nama saya ${name}, saya dari file Coba.js`);
    }, 2000);
};

// cetakNama(nama);

module.exports = cetakNama;