import express from "express";
import request from "supertest";


const app = express();
const port = 3000;


app.get('/products/*.json', (req, res) => {
    res.send(`${req.originalUrl}`);
});

app.get('/categories/*(\\d+)', (req, res) => {
    res.send(`${req.originalUrl}`);
});

test("Test Route Path", async () => {
    let response = await request(app).get("/products/marsha.json");
    expect(response.status).toBe(200);

    response = await request(app).get('/products/1231wdjlasjdias.json');
    expect(response.status).toBe(200);
    
    response = await request(app).get('/categories/1231wdjlasjdias');
    expect(response.status).toBe(404);
    
    response = await request(app).get('/categories/1231312312312');
    expect(response.status).toBe(200)
});

