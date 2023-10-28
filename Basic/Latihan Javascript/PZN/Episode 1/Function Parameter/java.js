//FUNCTION PARAMETER
function sayHai(parameter1, parameter2) {
    document.writeln(`<p>Ini isi parameter ke satu = ${parameter1}.</p> <p>Dan ini isi parameter ke dua = ${parameter2}.</p>`);
}

sayHai("Irzi", "Rahmatullah");
sayHai(10, 65); // Jadi disini boleh memasukkan apa saja, sesuai dengan jumlah parameternya.

sayHai("true", 11232, 1324, 1123); //Jika jumlah datanya lebih dari jumlah parameternya, maka akan diambil sesuai jumlah parameternya.