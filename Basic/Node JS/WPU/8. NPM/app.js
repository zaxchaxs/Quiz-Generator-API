// console.log(`hello word!`);

// Cara install nya npm init
// node app di terminal

// Untuk menggunakan import, ubah setting style di package.json jadi module.
import validator from 'validator';
import chalk from 'chalk'

// Silahkan lihat dokumentasi nya di web npm, search validator di search inputnya.

validator.isEmail('irzirahmatullah@gmail.com'); // True
validator.isEmail('irzirahmatullah@wakwak.c'); // False 

// console.log(validator.isEmail('Irzirahmatullah@gmaiml.com'));

const noHP = '087881814198';
validator.isMobilePhone(noHP, 'id-ID'); // True

// console.log(validator.isMobilePhone(noHP, 'id-ID'));


// Chalk
const log = console.log;
log(chalk.blue.italic(`Hello Irzi Rahmatullah`));