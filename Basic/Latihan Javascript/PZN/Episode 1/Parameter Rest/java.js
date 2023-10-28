

//Rest Parameter

function kambing (parameter1, ...parameterKe_N){   //artinya bisa membuat berapapun parameter.
    let total = 0;
    for (const iterator of parameterKe_N) {
        total += iterator;
    }
    document.writeln(`<p>Total ${parameter1} is ${total}`);
}

kambing ("Kerbau", 1, 2, 3, 4, 1, 12, 321, 312,"sapi", 12); //parameter ke-2 jadi boleh berapapun

