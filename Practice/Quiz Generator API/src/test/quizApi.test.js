import supertest from "supertest";
import { app } from '../app/server.js';

describe('Test get api',  () => {
    it('should can get questions', async () => {
        const result = await supertest(app)
            .get('/quizeez/questions')

        expect(result.status).toBe(200);
        expect((result.body).length).toBe(20);
    });

    it('can get question by category linux', async () => {
        const result = await supertest(app)
            .get('/quizeez/questions/Linux')

        expect(result.status).toBe(200);
        for (const categories of result.body) {
            expect(categories.category).toBe('Linux')
        };
    });

    it('should error cause category is not found', async () => {
        const result = await supertest(app)
            .get('/quizeez/questions/CategorySalah');

        expect(result.status).toBe(404);
        expect(result.body.error).toBe('No questions found');

    })

})