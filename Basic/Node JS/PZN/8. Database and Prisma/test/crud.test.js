import { prismaClient } from "../src/prisma-client"

// https://www.prisma.io/docs/orm/prisma-client/queries/crud#example-schema

// CREATE QUERY
// describe('Prisma Client', () => {
//     it('Should be able to create/insert value into customers table.', async () => {
//         // customers disini adalah nama table model di schema prismanya
//         const users = await prismaClient.customer.create({
//             data: {
//                 // properti-properti ini merupakan nama kolom di tabel customers.
//                 id      : 1,
//                 name    : 'Irzi Rahmatullah',
//                 phone   : '087881814198',
//                 email: 'zirrah@gmail.com'
//             },
//         });

//         console.log(`Isi dari var user yaitu : ${users}`);
//         // for (const user of users) {
//         //     console.log(`ID : ${user.id}, Nama : ${user.name}, Mood : ${user.mood} `);
//         // }
        
//         expect(users.name).toBe('Irzi Rahmatullah');
//     });
// });


// UPDATE QUERY
// describe('Prisma Client', () => {
//     it('Should be able to update customers table.', async () => {
//         // customers disini adalah nama table model di schema prismanya
//         const users = await prismaClient.customer.update({
//             data : {
//                 name : 'Marsha Aprilia',
//             },
//             where : {
//                 id : 2,
//             }
//         })

//         expect(users.name).toContain('Marsha Aprilia');
//     });
// });

// READ QUERY
describe('Prisma Client', () => {
    it('Should be able to read the database.', async () => {
        const users = await prismaClient.customer.findUnique({
            where: {
                // hanya bisa pakai id, email, dan phone karena unique
                id: 1,
            }
        });
        
        for(let key in users) {
            console.log(`${key} : ${users[key]}`);
        };

    });
});


// // DELETE QUERY
// describe('Prisma Client', () => {
//     it('Should be able to delete the database.', async () => {
//         const users = await prismaClient.customer.delete({
//             where : {
//                 id : 3,
//             }
//         });

//         expect(users.name).toBe('testing');

//     });
// });
