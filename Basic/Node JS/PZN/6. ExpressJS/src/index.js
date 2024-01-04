import express from "express";

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

app.get('/testing', (req, res) => {
    res.send(`Hello World!, ini halaman testing.`);
});

// Cara menjalankan 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

