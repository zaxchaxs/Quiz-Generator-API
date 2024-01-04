import express from "express";
import request from "supertest";


const app = express();
const port = 3000;


app.get('/hello/wordo', (req, res) => {
    res.json({
        path: req.path,
        originalURL: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,
    });
});

test("Test Request URL", async () => {
    const response = await request(app)
    .get('/hello/wordo')
    .query({name: 'marsha'});

    expect(response.body).toEqual({
        path: '/hello/wordo',
        originalURL: '/hello/wordo?name=marsha',
        hostname: '127.0.0.1',
        protocol: 'http',
        secure: false
    });
})