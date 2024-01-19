import { prismaClient } from "../src/prisma-client"

// https://www.prisma.io/docs/orm/prisma-client/queries/crud#example-schema

// CREATE MANY Query
// describe('Prisma Client', () => {
//     it('Should be create many data', async () => {
//         const { count } = await prismaClient.customer.createMany({
//             data: [
//                 { id: 5, name: 'Bob', email: 'bob@prisma.io', phone: '24567812' },
//                 { id: 6, name: 'Bobo', email: 'bob@prisma.io', phone: '123413123' }, // Duplicate unique key! di emailnya sama.
//                 { id: 7, name: 'Yewande', email: 'yewande@prisma.io', phone: '21232131' },
//                 { id: 8, name: 'Angelique', email: 'angelique@prisma.io', phone: '2132312' },
//             ],
//             skipDuplicates: true,
//             // unique key yang terdetect akan di skip! sehingga countnya akan 3
//         });

//         expect(count).toBe(3);
//         console.log(`tipe data dari count : ${typeof(count)}`);
//         // Return valuenya akan berupa number/jumlah data yang berhasil di create/insert.
//     })
// })


// DELETE MANY Querey
// Dengan delete many bisa menggunakan where kolom apa saja, tidak harus yg unique key. Tidak seperti delete biasa.
// describe("Prisma Client", () => {
//     it('Should be to able delete many data', async () => {
//         const {count} = await prismaClient.customer.deleteMany({
//             where: {
//                 name: 'Bob'
//             }
//         })
//         expect(count).toBe(1);
//     });
// });

// READ MANY Query
// mengunakan method fineMany
describe("Prisma Client", () => {
    it('Should be to read many data in database', async () => {
        const costumors = await prismaClient.customer.findMany({});
        
        console.log(costumors)
        console.log(typeof(costumors));

        expect(costumors.length).toBe(6);
        // expect(count).toBe(1);
    });
});

