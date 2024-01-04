import express from "express";
import request from "supertest";


const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'text/html',
    });
    res.send('<h1>Hello World!</h1>')
});


test("Test Response Body", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("<h1>Hello World!</h1>");
    expect(response.get('content-type')).toBe('text/html; charset=utf-8');
    expect(response.status).toBe(200);
});



// app.listen(port, () => {
//     console.log(`Server running in port ${port}`)
// });