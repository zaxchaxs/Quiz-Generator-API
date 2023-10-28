
const express = require('express');
const app = express();
const port = 3000;

// Kasih tahu agar express kita menggunakan view engine nya menggunakan EJS
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { marsh: 'Marsha Aprilia', myName: 'Irzi Rahmatullah'});
});

app.get('/about', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Marsha Aprilia',
            kelas: 'Mipa 2'
        },
        {
            nama: 'Irzi Rahmatullah',
            kelas: 'Mipa 2'
        },
        {
            nama: 'Caca',
            kelas: 'Mipa 2'
        }
    ];
    res.render('about', {mhs: mahasiswa});
    // otomatis mencari file about yang ada di folder views(default)
    // dan ganti format file jadi ejs
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`System is running in ${port} port.`)
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.send(`Test.`)
})



const ejs = require('ejs');
const people = ['caca', 'marsha', 'aprilia'];
const html = ejs.render(`<%= people.join(", "); %>`, {people: people});