

//Function Recursive


//penyelesaian menggunakan perulangan
function factorial(value){
    let result = 1;
    for (let z = 1; z <= value; z++) {
        result *= z;
    }
    return result;
}

 console.info(factorial(5));


// menggunakan Function Recursive
function iniRecursive(nilai){
    if (nilai === 1) {
        return 1;
    } else {
        return nilai * iniRecursive(nilai - 1)
    }    
}

document.writeln(iniRecursive(5));


function irzi(nilai1){
    if (nilai1 === 1) {
        return 1;
    } else {
        return nilai1 * irzi(nilai1 - 1)
    }
}

document.writeln(irzi(8))