{
        // memakai for
        const angka = [1, 3, -4, 9, 10, 22, 123, -45, 2, 19];
        const newAngka = [];

        for (let i = 0; i < angka.length; i++) {
            if(angka[i] >= 3 ) {
                newAngka.push(angka[i]);
            }
            
        };
        console.log(newAngka);


        // Memakai filter

        const number = [1, 3, -4, 9, 10, 22, 123, -45, 2, 19];
        const newNumber = number.filter(function(a) {
            return a >= 5;
        });
        console.log(newNumber)
}



{
        // Map
        // Kalikan semua angka dengan 5
        const numbers = [2, 4, 5 ,6,42 , 7, 1, 10, 29, -1, -6, 23, 95, -26, -231, 421];
        const newNumbers = numbers.map((a => a * 2 ))
        // Ini bisa memakai arrow function, aslinya sama kok kaya function di filter atas.
        
        console.log(newNumbers);
}



{
        // Reduce 
        // Menambahkan semua value yg ada di array
        const numbers = [2, 4, 5 ,6,42 , 7, 1, 10, 29, -1, -6, 23, 95, -26, -231, 421];
        const newNumbers = numbers.reduce((accumulator, currentValue,) => accumulator + currentValue);

        console.log(newNumbers);
}


{
        // Method Chaining 
        // Mencari angka > 5 
        // Kalikan 3
        // Jumlahkan

        const angka = [1, 3, -4, 9, 10, 22, 123, -45, 2, 19];
        // const hasil = angka.filter(a => a >= 10).map( a => a + 3 ).reduce((accumulator, currentValue) => accumulator + currentValue);  
        
        // Kita rubah agar lebih mudah dimengerti
        const hasil = angka.filter(a => a >= 10) // 10, 22, 123, 19
        .map( a => a * 3 )  // 30, 66, 369, 57
        .reduce((accumulator, currentValue) => accumulator + currentValue); // 522

        console.log(hasil)
}