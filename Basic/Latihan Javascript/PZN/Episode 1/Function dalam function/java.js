//Function dalam function

function functionLuar(){

    function functionDalam(){
        console.info("dalam")
    }

    functionDalam();
    functionDalam();
}

functionLuar();
functionDalam(); //ini akan error, karena function yg berada didalam function tidak dapat diakses kecuali didalam fanction tersebut.
