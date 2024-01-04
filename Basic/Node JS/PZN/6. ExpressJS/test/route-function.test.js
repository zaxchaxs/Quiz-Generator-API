import express from "express";
import request from "supertest";


const app = express();
const port = 3000;

// Caranya dengan memakai method route seperti dibawah, lalu dilanjutkan chaining dengan method httpnya.
app.route('/products')
    .get((req, res) => {
        res.send(`Create Get`);
    })
    .post((req, res) => {
        res.send(`Create Post`);
    })
    .put((req, res) => {
        res.send(`Create Put`)
    })


test("Test Route Function", async () => {
    let response = await request(app).get("/products");
    expect(response.text).toBe(`Create Get`);
    
    response = await request(app).post("/products");
    expect(response.text).toBe(`Create Post`);
    
    response = await request(app).put("/products");
    expect(response.text).toBe(`Create Put`);
});



// Kita juga bisa membuat router sendiri jika ingin membuat grouping router. Contohnya seperti ini:
const router = express.Router();

// bisa menambahkan middleware juga
router.use((req, res, next) => {
    console.log(`Receive request ${req.originalUrl}`);
    next();
});

router.get(`/contoh/a`, (req, res) => {
    res.send(`Contoh a`);
});


test("Test router", async () => {
    // Lalu panggil router diatas dengan seperti ini:
    app.use(router);
    const res = await request(app).get(`/contoh/a`);
    expect(res.text).toBe(`Contoh a`);
})





// app.listen(port, port)