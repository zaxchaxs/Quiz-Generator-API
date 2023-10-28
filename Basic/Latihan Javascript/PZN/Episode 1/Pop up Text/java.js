alert("Halo guys")

const name = prompt("Masukkan nama anda!");

alert('ini pasti nama kamu');
alert(name)

const letIn = confirm('Mau liat yang lucu?')
if (letIn) {
    let namamu = prompt("Sebelum itu, masukkan namamu terlebih dahulu!")
    alert('Oke ${namamu}. Silahkan!')
} else {
    alert('Yah.. yasudah. Bye bye')
}