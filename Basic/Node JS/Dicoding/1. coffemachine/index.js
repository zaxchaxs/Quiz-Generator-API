
// Menggunakan CommonJS
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// Menggunakan ES6
import {coffeeStock, isCoffeeMachineReady as coffeSiap} from './state.js';

const makeCoffe = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log('Coffe berhasil dibuat.')
    } else {
        console.log('hahah');
    }
};
console.log(coffeSiap);

makeCoffe("arabica", 100);