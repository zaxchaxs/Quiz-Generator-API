

const fs = require('fs');



const express = require('express');
// Variable express bertindak sebagai function;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname}, (err) => {
    if (err) {
        res.status(500).send(`Server error mass!: ${err}`);
    } else {
        console.log('Succesed.')
    }
  });
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname});
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`System is running in ${port} port.`)
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});
// Cara penulisan di http = http://localhost:3000/product/2?category=Skateboard

// Method ini akan selalu dijalankan untuk request apapun, jika route nya selain dari yang atas. Contoh jika route nya "/adkawoda", method dibawah akan dijalankan.
// Tapi jika method ini ditulis dipaling atas, maka code nya akan dijalankan terlebih dahulu.
app.use('/', (req, res) => {
    res.send(`Test.`)
})