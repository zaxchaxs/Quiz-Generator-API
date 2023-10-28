

//Private class field
//untuk menggunakan private field, menggunakan "#" sebelum nama field nya.
//misal

class Number {
    #counter = 0;  //dengan menggunakan "#" akan membuat field counter akan menjadi private, sehingga tidak bisa diakses diluar class Number

    Naik (){
        this.#counter++;
    }
    Turun (){
        this.#counter--;
    }
    get(){
        return this.#counter;
    }
}

const hehe = new Number();

// hehe.#counter = 12; ini akan error karena private
console.info(hehe)

hehe.Naik();
hehe.Naik();
hehe.Naik();
hehe.Naik();
hehe.Naik();
//ada 5

console.info(hehe.get());
