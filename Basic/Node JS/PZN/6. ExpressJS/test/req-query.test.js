import express from "express";
import request from "supertest";


const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}. Semoga harimu menyenangkan!`);
});

test("Test Express js", async () => {
    const response = await request(app).get("/").query({
        firstName: 'Irzi',
        lastName: 'Rahmatullah'
    });
    expect(response.text).toBe("Hello Irzi Rahmatullah. Semoga harimu menyenangkan!");
});