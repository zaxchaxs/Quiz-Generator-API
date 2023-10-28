

//ANONYMOUS FUNCTION


//Anonymous function didalam variable
let izi = function (parameter1) { //jadi tidak perlu menambahkan nama function, bisa langsung menambahkan parameter.
    document.writeln(`<p>hello ${parameter1}`)
}

izi("irzi") 



//Anonymous function didalam parameter
function giveMeName(parameter2) {
    parameter2("Rahmatullah")
}

giveMeName(function (parameter1){
    document.writeln(`<p>Hi ${parameter1}`)
})