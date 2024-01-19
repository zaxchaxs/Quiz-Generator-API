import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    // it('should can create one to one relation', async () => {
    //     const wallet = await prismaClient.wallet.create({
    //         data: {
    //             id: 1,
    //             balance: 400000,
    //             customer_id: 1,
    //         },
    //         include: {
    //             customer: true,
    //         },
    //     })
    //     console.log(wallet);
    // });
    
    // Insert data baru / insert with relation
    // it('should can create one to one relation with insert relation', async () => {
    // const newCustomer = await prismaClient.customer.create({
    //         data: {
    //             id: 9,
    //             name: 'Aprilia',
    //             phone: '0987651236',
    //             email: 'caca@gmail.coms',
    //             wallet: {
    //                 create: {
    //                     id: 9,
    //                     balance: 1000000,
    //                 },
    //             },
    //         },
    //         include: {
    //             wallet: true,
    //         },
    //     });

    //     console.log(newCustomer);
    // });

    it('should can find one to one relation', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: 2,
            },
            include: {
                wallet: true,
            },
        });

        console.log(customer);
    });
    
    it('should can find one to one relation with customer who havent wallet', async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                wallet: {
                    is: null,
                }
            },
            include: {
                wallet: true,
            },
        });

        console.log(customer);
    });
})