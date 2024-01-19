import express from "express";
import request from "supertest";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({
        sayHi: `Hello ${name}!` 
    });
});

app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({
        sayHi: `Hello ${name}!` 
    });
});

test("Test request body json", async () => {
    const response = await request(app).post("/json")
        .set('Content-Type', 'application/json')
        .send({name: 'Marsha'})
    expect(response.body).toEqual({
        sayHi: 'Hello Marsha!'
    });
});

test("Test request body form", async () => {
    const response = await request(app)
        .post("/form")
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('name=Marsha')
    expect(response.body).toEqual({
        sayHi: 'Hello Marsha!'
    });
});