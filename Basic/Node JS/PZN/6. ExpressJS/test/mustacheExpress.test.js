import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";


const app = express();
const port = 3000;

// Caranya seperti ini
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
// ini untk memberitahu bahwa file htmlnya dipakai untuk enigne.
app.engine('html', mustacheExpress());

app.get('/', (req, res) => {
    // lalu seperti ini
    res.render('index', {
        title: 'Testing Mustache',
        sayHello: 'Hello Marsha', 
    })
});

test("Test Express js", async () => {
    const response = await request(app).get("/");
    console.log(response.text);
    expect(response.text).toContain("Hello Marsha");
    expect(response.text).toContain("Testing Mustache");
});