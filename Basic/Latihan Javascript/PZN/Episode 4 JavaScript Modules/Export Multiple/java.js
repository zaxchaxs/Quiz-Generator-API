

// Export Multiple
// Untuk memudahkan jika ada banyak yg ingin di export.


class Irzi{
    constructor(param1){
        this.name = param1
        console.info(`Halo, nama saya adalah ${this.name}`);
    }

    sayHobbies (hb){
        console.info(`my hobbie is ${hb}`);
    }
}

const place = `Bogor hehe`;
const live = console.info(`I am from ${place}`)

function haha(){

};

export {Irzi, place, live, haha}; //jadi tinggal seperti ini.