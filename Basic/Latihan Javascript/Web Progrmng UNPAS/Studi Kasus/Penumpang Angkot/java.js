    
    
    
    //  buat variable utk array
    const penumpangAngkot = [`caca`, `irzi`, `sasa`];

    const PenumpangAngkotNaik = function (namaPenumpangAngkot, penumpangAngkot){
        // Kalo penumpang angkot kosong, maka masukkan namaPenumpangAngkot.
        if (penumpangAngkot.length === 0){
            penumpangAngkot.push(namaPenumpangAngkot);

        // Else, masukkan namaPenumpangAngkot ke urutan array berikutnya.
        } else {
            for (let i = 0; i < penumpangAngkot.length; i++) {
                
                // tapi klo ada kursi kosong, isi dulu sama namaPenumpangAngkot.
                if(penumpangAngkot[i] === undefined){
                    penumpangAngkot[i] = namaPenumpangAngkot;
                    return penumpangAngkot;

                // else ada nama penumpang yg sama, kasih info.
                } else if(penumpangAngkot[i] === namaPenumpangAngkot){
                    console.info(`${namaPenumpangAngkot} sudah ada didalam angkot.`)
                    return penumpangAngkot;

                // ini biar namaPenumpangAngkotnya masuk ke array berikutnya.
                } else if (i === penumpangAngkot.length -1){
                    penumpangAngkot.push(namaPenumpangAngkot);
                    return penumpangAngkot;
                }
            }
        }
        return penumpangAngkot;  
    };
    


    // penumpang turun.
    const penumpangAngkotTurun = function (namaPenumpangAngkotTurun, penumpangAngkot){
        // Jika penumpangAngkot gapunya array, kasih info.
        if (penumpangAngkot.length === 0){
            console.info(`Tidak ada penumpang didalam angkot.`);

        } else {
            for (let i = 0; i < penumpangAngkot.length; i++) {
                
                // kalo namaPenumpangAngkotTurun sama seperti data yg ada di array
                if (penumpangAngkot[i] === namaPenumpangAngkotTurun) {
                    // rubah kedalam undefined
                    penumpangAngkot[i] = undefined;
                    return penumpangAngkot;

                // tpi jika namaPenumpangAngkotTurun ga sama seperti data yg ada di array, kasih info.
                } else if (penumpangAngkot[i] !== namaPenumpangAngkotTurun) {
                    console.info(`${namaPenumpangAngkotTurun} tidak ada didalam angkot.`)
                    
                }
            }
        }
        return penumpangAngkot;
    }
    
    penumpangAngkotTurun(`caca`, penumpangAngkot);
    console.info(penumpangAngkot);



// const haha = {
//     nama : `Irzi Rahmatullah`,
//     umur : 19,
//     IPSemester : [3.19, 3.00, 3.50, 4.00, 2.78],
//     IPK : function (){
//         let total = 0;
//         for (let i = 0; i < this.IPSemester.length; i++) {
//             total += this.IPSemester[i];
//         }
//         return total / this.IPSemester.length;
//     },
// };


// console.log(haha.IPK())