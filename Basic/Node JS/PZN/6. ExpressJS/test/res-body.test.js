import express from "express";
import request from "supertest";


const app = express();
const port = 3000;

const middlewareTesting = (req, res, next) => {
    res.send("Hello Dunia!");
    next();
}

app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'text/html',
    });
    res.send('<h1>Hello World!</h1>')
});

// app.use(middlewareTesting);
app.post('/resBody', (req, res) => {
    res.sendFile(__dirname + '/contoh.txt');
})


test("Test Response Body", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("<h1>Hello World!</h1>");
    expect(response.get('content-type')).toBe('text/html; charset=utf-8');
    expect(response.status).toBe(200);
});

test("Testi Response Body lainnya", async () => {
    const response = await request(app).post('/resBody');
    expect(response.text).toContain("Hello my name is Zaxchaxss")
});

// app.listen(port, () => {
//     console.log(`Server running in port ${port}`)
// });