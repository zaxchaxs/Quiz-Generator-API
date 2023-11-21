const fs = require('fs');
const __dirfiles = './notes.txt';



const errorCode = err => {
    console.log(`Error loh bang : ${err} `)
}

// Callback dari readFileAsynchronous menerima 2 parameter.
try{
    fs.readFile(__dirfiles, 'utf-8', (err, solved) => {
        if (err) {
            console.log(errorCode(err))
        } else {
            console.log(solved);
        };
        
    });
    
} catch(err) {
    console.log(err);
};




const dataMhs = [
    {
        nama : "Irzi Rahmatullah",
        email : "irzi@gmail.com"
    },
    {
        nama : "caca marsha",
        email : "marsha@gmail.com",
    },
    {
        nama : "Marsha aprilia",
        email : "caca@gmail.com"
    },
    {
        nama : "Lewis Hamilton",
        email : "hamilton@gmail.com"
    }
];
fs.writeFile('./output.txt', JSON.stringify(dataMhs, null, 4), (err, solved) => {
    if(err) throw err;
});





