import express from "express";
import request from "supertest";


const app = express();
const port = 3000;

// cara mengambil parameter route nya yaitu dengan cara menambahkan titik dua seperti dibawha.
app.get('/products/:id', (req, res) => {
    res.send(`${req.params.id}`);
    // res.status(200)
});

app.get('/categories/:id(\\d+)', (req, res) => {
    res.send(`${req.params.id}`);
});

test("Test Route Path", async () => {
    let response = await request(app).get("/products/34");
    expect(response.status).toBe(200);

    response = await request(app).get('/products/testing');
    expect(response.status).toBe(200);
    
    response = await request(app).get('/categories/1231wdjlasjdias');
    expect(response.status).toBe(404);
    
    response = await request(app).get('/categories/1231312312312');
    expect(response.status).toBe(200)
});

// app.listen(port, port)