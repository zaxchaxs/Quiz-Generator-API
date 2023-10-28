
//Function Return Value


//Membuat function dengazxn parameter dan return value
function sayHello(Parameter1, Parameter2) {
    const say = `Hallo ${Parameter1} ${Parameter2}`;
    return say;
}

// memanggil value dan menangkap return value nya
const result = sayHello("Irzi", "Rahmatullah")
document.writeln(`${result}`)
document.writeln(`<br></br>`)



function finalScoreMTK(nilai) {
    if (nilai>90){
        return "nilai kamu A";
    } else if (nilai>80) {
        return "nilai kamu B";
    } else if (nilai>70) {
        return "nilai kamu C";
    } else {
        return "nilai kamu D"
    }
}

const nilaiReal = finalScoreMTK(95)
document.writeln(`${nilaiReal}`)


//menghentikan eksekusi dengan menggunakan return
function whatIsIt (nilaiRandom, nilaiYangInginDituju) {
    for (const Element of nilaiRandom ) {
        if (Element === nilaiYangInginDituju) {
            return "Datanya ada"
        } return "Datanya Gaada"
    }

}

console.info(whatIsIt([1, 2, 3, 4, 5, 6, 7, 8,], 5) ) //1 sampai 8 = elemen parameter 1.