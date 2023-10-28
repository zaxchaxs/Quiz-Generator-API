// Latihan Popup Box

var x = 20,
  y = 10,
  z = 50,
  q = "Irzi";
console.log("Hello Fucker");
console.log(
  "Jadi gini fcker, siapa sih cowo paling cakep di dunia? tentu saja dia adalah " +
    q
);
alert("Coba Isi Guys");
var testing = prompt("Coba isi password fb kamu:");
alert("Ini pasti password kamu");
alert(testing);

//Ini Pengulangan
alert("Selamat datang...");
var again = true;

while (again) {
  var nama = prompt("Masukkan namamu.");
  alert("Halo " + nama + " sehat selalu ya!");

  again = confirm("Mau coba isi nama kamu lagi ga?");
}

// Ini Pengkondisian

var tes = confirm(
  "Kamu yakin " +
    nama +
    " diatas umur 18 tahun? Jika belum kamu mending klik cancel aja ya."
);

if (tes === true) {
  alert("Oke berarti kamu bisa lanjut scroll website ini.");
} else {
  alert("Nah! Karena belum, mending kamu cari website lain deh!");
}
