

const tampilPesan = function(nama) {
    return(nama);
}
console.log(tampilPesan(`zaxchaxs`));


// code diatas dirubah jadi arrow function sperti dibawah.

// kalo parameternya 1, bisa tidak usah pakai () 
const showMessage = nama => {
    return(nama);
}
console.log(showMessage(`irzi Rahmatullah`));