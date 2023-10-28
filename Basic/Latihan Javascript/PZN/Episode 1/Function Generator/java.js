

//Function Generator
function* createNames () {
    yield "Irzi";
    yield "Rahma";
    yield "Tullah";
    yield "hahahihi"
}

const name = createNames();
for (const names of name){
    console.info(names);
}  




//Kompleks
function* angkaGanjil(value) {
    for (let z = 1; z < value; z++) {
        if ( z % 2 === 1) {
            yield z;
        }
    }
}

const numbers = angkaGanjil(100);
for (const number of numbers) {
    console.info(number);
}