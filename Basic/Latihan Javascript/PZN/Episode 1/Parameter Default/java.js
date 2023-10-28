

//PARAMETER DEFAULT
// Untuk mengatur default value dari sebuah parameter.

function irzi (parameter1, parameter2 = "DefaultValue") {
    document.writeln(parameter1);
    document.writeln(parameter2);
}

irzi("Halo", "Suki<p>");
irzi("haha", 100);
irzi("<p>kamu");  //karena parameter ke-2 tidak di input, maka akan diisi oleh default value
irzi("<p>kamu", undefined);

