import express from "express";
import request from "supertest";


const app = express();
const port = 3000;

// Cara menghandling error yaitu menggunakan middleware, dengan 4 params berikut
const errorHandlingMiddleware = (err, req, res, next) => {
    res.status(500).send(`Terjadi error ${err.message}`);
};

app.get('/', (req, res) => {
    throw new Error("Ups hehe");
});
// Lalu panggil middleware dibawah app.get ya zi.
app.use(errorHandlingMiddleware);

test("Test Error Handling middleware", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(500);
    expect(response.text).toBe('Terjadi error Ups hehe');
});

// app.listen(port, () => {
//     console.log(`${port}`);
// })