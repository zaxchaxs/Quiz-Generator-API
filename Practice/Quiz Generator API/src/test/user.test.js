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
});

describe('Login user', () => {
    it('should can login', async () => {
        const result = await supertest(app)
            .post('/quizeez/users/login')
            .send({
                username: "IrziRahmatullah",
                password: "Rahasia123",
            })

        expect(result.status).toBe(200);
        expect(result.body.token).toBeDefined();
    });

    it("Should error because username is not found in database", async () => {
        const result = await supertest(app)
            .post('/quizeez/users/login')
            .send({
                username: "UsernameNotFound",
                password: "Rahasia123"
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBe("Username or password wrong")
    });
    
    it("Should error because passwords is wrong", async () => {
        const result = await supertest(app)
            .post('/quizeez/users/login')
            .send({
                username: "IrziRahmatullah",
                password: "WrongPassword"
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBe("Username or password wrong")
    });

});

describe('Get Current User', () => {
    it('should can get current user', async () => {
        const result = await supertest(app)
            .get('/quizeez/users/user')
            .send({
                username: "IrziRahmatullah"
            });

        expect(result.status).toBe(200);
        expect(result.body.username).toBe("IrziRahmatullah");
    });
        
    it('should error cause user not found', async () => {
        const result = await supertest(app)
            .get('/quizeez/users/user')
            .send({
                username: "UsernameNotFound"
            });

        expect(result.status).toBe(404);
        expect(result.body.errors).toBe("Username not found");    
    });

    it('should error cause unauthorized', async () => {
        const result = await supertest(app)
            .get('/quizeez/users/user')
            .send({
                username: "testingUsername"
            });

        expect(result.status).toBe(401);
        expect(result.body.errors).toBe("Unauthorized");    
    });

});

describe('Update User', () => {
    it('should can update user', async () => {
        const result = await supertest(app)
            .patch('/quizeez/users/user')
            .send({
                username: "IrziRahmatullah",
                password: "PasswordBaru",
                name: "Irzi Baru"
            });

            expect(result.status).toBe(200);
            expect(result.body.username).toBe("IrziRahmatullah");
            expect(result.body.name).toBe("Irzi Baru");    
    });

    it('should error cause request invalid', async () => {
        const result = await supertest(app)
            .patch('/quizeez/users/user')
            .send({
                username: "IrziRahmatullah",
                password: "A",
                name: "a"
            });
        expect(result.status).toBe(400);
        expect(result.body.errors).toContain('"password" length must be at least 6 characters long');
        
    });

    it('should error cause unauthorized', async () => {
        const result = await supertest(app)
            .patch('/quizeez/users/user')
            .send({
                username: "testingUsername",
                password: "PasswordBaru",
                name: "Nama Baru",
            });

        expect(result.status).toBe(401);
        expect(result.body.errors).toBe("Unauthorized");    
    });
});

describe('Logout test', () => {
    it('should can delete the token', async () => {
        const result = await supertest(app)
            .patch('/quizeez/users/logout')
            .send({
                username: "IrziRahmatullah"
            });

        expect(result.status).toBe(200);
        expect(result.body.message).toBe("OK");
    });

    it('shoul error with status code 404', async () => {
        const result = await supertest(app)
            .patch('/quizeez/users/logout')
            .send({
                username: "UserNotFound"
            });

        expect(result.status).toBe(404);
        expect(result.body.errors).toBe("User not found");
    });
})

