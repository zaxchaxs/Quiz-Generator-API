import express from "express";
import request from "supertest";


const app = express();
const port = 3000;

// Cara untuk menggunakan middleware static file nya seperti ini. Bawaan dari express
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

test("Test Biasa", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
});

// Testi isi isi file contoh dari middleware static file
test("Test Static File", async () => {
    const response = await request(app).get('/contoh.txt');
    expect(response.text).toContain(`Hello my name is Zaxchaxss`);
});

