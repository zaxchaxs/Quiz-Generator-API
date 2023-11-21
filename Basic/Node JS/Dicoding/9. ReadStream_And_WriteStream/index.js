const fs = require('fs');
const {resolve} = require('path');

    // ReadStream
// const readableStream = fs.createReadStream('./text.txt', {
//     highWaterMark : 15
// });

// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`)
//     } catch (err) {
//         console.log(`Error bang : ${err}`);
//     }
// });

// readableStream.on('end', () => {
//     console.log(`\nDone.`)
// });



//     // WriteStream
// const writeableSream = fs.createWriteStream('output.txt');

// writeableSream.write("awdoawkdowajodjawodjwao");
// writeableSream.end('Udah deh');






// const readableStream = fs.createReadStream(resolve(__dirname, 'text.txt'), {
//     highWaterMark : 15
// });

// const writeableSream = fs.createWriteStream(resolve(__dirname, 'output.txt'));


// const readAndWrite = () => {
    
//     readableStream.on('readable', () => {
//         try {
//             writeableSream.write(`[${readableStream.read()}]\n`)
//         } catch (err) {
//             console.log(`Error bang : ${err}`);
//         }
//     });
    

//     readableStream.on('end', () => {
//         writeableSream.end();
//     });
// };

// readAndWrite();


