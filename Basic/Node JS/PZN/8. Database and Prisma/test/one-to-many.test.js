import { prismaClient } from "../src/prisma-client"

// Insert data comment sekaligus include data customers
describe("Prima Client", () => {
    // it('Should can insert and include', async () => {
    //     const comment = await prismaClient.Comment.create({
    //         data: {
    //             customers_id: 2,
    //             title: 'Comment 3',
    //             description: 'description comment 3',
    //         },
    //         include: {
    //             customer: true,
    //         },
    //     });
    //     console.log(comment);
    // });
    
    // it('Should can insert with relation', async () => {
    //     const comment = await prismaClient.Customer.create({
    //        data: {
    //             id: 10,
    //             name: 'Caca',
    //             phone: '12344123',
    //             email: 'aca@gmail.com',
    //             comments: {
    //                 createMany: {
    //                     data: [
    //                             {
    //                                 title: 'Comment 1',
    //                                 description: 'Description comment 1',
    //                             },
    //                             {
    //                                 title: 'comment 2',
    //                                 description: 'description comment 2',
    //                             },
    //                         ],
    //                 }
    //             },
    //        },
    //        include: {
    //             comments: true,
    //        }
    //     });
    //     console.log(comment);
    // });

    it('Should can read customers with their comments', async () => {
        const comments = await prismaClient.customer.findMany({
            where: {
                id: 10,
            },
            include: {
                comments: true,
            },
        });
        console.log(comments);
    });

})  