import supertest from 'supertest';
import { app } from '../app/server.js';

describe('Register User', () => {
    it('should can register user insert the data into database', async () => {
        const result = await supertest(app)
            .post('/quizeez/users/register')
            .send({
                username: "IrziRahmatullah",
                password: "Rahasia123",
                name: "Irzi Rahmatullah"
            })

            // console.log(result.body)
            expect(result.status).toBe(200);
            expect(result.body.username).toBe("IrziRahmatullah");
    })
    
    it("Should error because the username is already exist", async () => {
        const result = await supertest(app)
            .post('/quizeez/users/register')
            .send({
                username: "IrziRahmatullah",
                password: "Rahasia123",
                name: "Irzi Rahmatullah"
            });

            expect(result.status).toBe(400);
            expect(result.body.errors).toBe("Username already exists")
    })

    it('should reject cause format request isnt invalid', async () => {
        const result = await supertest(app)
            .post('/quizeez/users/register')
            .send({
                username: "abcd",
                password: "abc",
                name: "Wo"
            })
            
            expect(result.status).toBe(400);
            expect(result.body.errors).toBe('"password" length must be at least 6 characters long');
    })
    

})