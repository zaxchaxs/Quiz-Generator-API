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

        expect(result.status).toBe(400);
        expect(result.body.errors).toBe("Unauthorized");    
    });

})