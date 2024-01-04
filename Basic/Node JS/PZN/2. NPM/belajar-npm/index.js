

console.log(`haha`)

import fs from 'fs';

// mkdir asych
fs.mkdir('./Testing folder', err => {
    if (err) throw err
});

fs.writeFile('./Testing folder/text1.txt', "Irzi Rahmatullah paling kece badai.", err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Berhasil membuat folder dan text.');
    };
})