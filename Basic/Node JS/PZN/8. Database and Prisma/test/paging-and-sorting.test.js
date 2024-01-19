import { prismaClient } from "../src/prisma-client"

// describe("Prisma Client", () => {
//     it('Should be return data sesuai skip dan take nya', async () => {
//         const data1 = await prismaClient.customer.findMany({
//             skip: 1,
//             take: 3
//         });
//         console.log(data1);
//         expect(data1.length).toBe(3);
//     })
// });

// describe("Prisma Client", () => {
//     it('Should be return data sesuai skip dan take nya. Lalu sorting sesuai id tertinggi.', async () => {
//         const data1 = await prismaClient.customer.findMany({
//             skip: 1,
//             take: 3,
//             orderBy: [
//                 {
//                     id: "desc",
//                 }
//             ]
//         });
//         console.log(data1);
//         expect(data1.length).toBe(3);
//     })
// });

// find many with select
describe("Prisma Client", () => {
    it('Should be return data sesuai skip dan take nya. Lalu sorting sesuai id tertinggi.', async () => {
        const data1 = await prismaClient.customer.findMany({
            skip: 1,
            take: 3,
            orderBy: [
                {
                    id: "desc",
                }
            ],
            select: {
                id: true,
                name: true,
                email: true,
            }
        });
        console.log(data1);
        expect(data1.length).toBe(3);
    })
});

