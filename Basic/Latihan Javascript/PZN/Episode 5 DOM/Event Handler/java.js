


    //Event Handler


    //Event target
    // kalo memakai event target, kita bisa menambahkan perubahannya lebih dari satu.

const clickME = document.getElementById("clickMe");
clickME.addEventListener("click", function(){
    clickME.setAttribute("value", "great, you finally clicked me.");

    // misal disini kita mau tambah lagi, bisa.
    console.log(`Button succesfully clicked.`);

})


        //Glocal event Handler

const clickME2 = document.getElementById("clickMe2");
clickME2.onclick = function (){
    clickME2.setAttribute("value", "Anjay, kamu berhasil mengclick saya.");
    // Sedangkan di global event handler, kita tidak menambahkan lagi tidak sepert event target diatas.
};
