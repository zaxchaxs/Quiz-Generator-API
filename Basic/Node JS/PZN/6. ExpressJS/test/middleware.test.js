import express from "express";
import request from "supertest";

const port = 3000;

const loggerMiddleware = (req, res, next) => {
    console.log(`Receive request: ${req.method} ${req.originalUrl}`);
    next();
};
const apiKeyMiddleware = (req, res, next) => {
    if(req.query.apiKey) {
        next()
    } else {
        res.status(401)
        .end();
    };
};
const addContentTypeMiddleware = (req, res, next) => {
    res.set("Content-Type", 'text/html');
    next();
};

const app = express();

// cara menggunakan middelware nya seperti ini, di app.use sesuai urutan middleware mana yg akan diekesekusi terlebih dahulu.   
app.use(loggerMiddleware);
app.use(apiKeyMiddleware);
app.use(addContentTypeMiddleware);

app.get('/testing', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});

// app.listen(port, () => console.log(`${port}`))

test("Test Response Middleware", async () => {
    const response = await request(app).get('/testing').query({apiKey : 112233});
    expect(response.get("Content-Type")).toContain("text/html");
    expect(response.text).toContain("Hello World!");
});

test('Test Response without apikey', async () => {
    const response = await request(app).get('/tesing');
    expect(response.status).toBe(401);
});