import express from "express";
import request from "supertest";


const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.set({
        'X-Powered-By': 'Irzi Rahmatullah',
        'X-Author' : 'Zaxchaxs',
    });
    res.send('Hello dunia!')
});

test("Test Express js", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello dunia!");
    expect(response.get('X-Powered-By')).toBe('Irzi Rahmatullah');
    expect(response.get('X-Author')).toBe('Zaxchaxs');
    expect(response.status).toBe(200);
});