import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', () => {
    it('Should can be create relation', async () => {
        const like = await prismaClient.Likes.create({
            data: {
                customer_id: 2,
                product_id: 4
            },
            include: {
                customer: true,
                product: true,
            },
        });
        console.log(like);
    });
});