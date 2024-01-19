import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it('Should can using AND operator', async () => {
        const product = await prismaClient.product.findMany({
            where: {
                // pakai array.
                AND: [
                    {
                        price: {
                            // gte = greater than equal
                            gte: 3000, 
                        }
                    },
                    {
                        id: {
                            gt: 5,
                        }
                    }
                ],
            },
            orderBy: [
                {
                    price: "desc"
                }
            ]
        })
        console.log(product);
        expect(product.length).toBe(3);
    });
});

// Buat or dan operator operato lainnya seperti : kurang dari, OR, NOT, StartWith, EndWith, contains 
// sama aja kok, search aja di doc nya : https://www.prisma.io/docs/orm/reference/prisma-client-reference#gt

describe("adasdasd", () => {
    it('testing', async () => {
        const creates = await prismaClient.product.create({
            data: {
                name: 'L',
                price: 6000,
                stock: 600,
                category: 'K6',
            },
        });
        
        console.log(creates); 
        expect(creates).toBe(1);
    });
})