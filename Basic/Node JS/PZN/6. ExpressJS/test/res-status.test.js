import express from "express";
import request from "supertest";


const app = express();
const port = 3000;


app.get('/', (req, res) => {
    if(req.query.name) {
        res.status(200).send(`Hello ${req.query.name}`)
    } else {
        res.status(400).res.send(`Kamu siapa?!`);
    };
});

test('Test Response Status', async () => {
    const response = await request(app).get('/').query({name: 'marsha'});
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello marsha');

    // expect(response.status).toBe(400)
});