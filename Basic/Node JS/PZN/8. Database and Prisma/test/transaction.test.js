import { prismaClient } from "../src/prisma-client"

// Transaction di sql dengan sequantial transaction/make array.
// describe("Prisma Client", () => {
//     it("Should can execute secquantil transaction", async () => {
//         const [zaxch, marsh] = await prismaClient.$transaction([
//             // dua data dibawah akan masuk kedalam destructuring/ masuk ke var zaxch and marsh.
//             prismaClient.customer.create({
//                 data: {
//                     id : 3,
//                     name: 'Zaxchaxs',
//                     email: 'zax@gmail.com',
//                     phone: '09876542321',
//                 },
//             }),
//             prismaClient.customer.create({
//                 data: {
//                     id: 4,
//                     name: 'Marshanda',
//                     phone: '123213123131',
//                     email: 'ahaha@gmail.com', 
//                 }
//             })
//         ]);
        
//                 expect(zaxch.name).toBe('Zaxchaxs');
//                 expect(marsh.name).toBe('Marshanda');
//     })
// });

// Transaction di sql dengan interactive transaction/make callback function. Bisa lihat bedanya dengan cara yang diatas.
describe("Prisma Client", () => {
    it("Should can execute interactive transaction", async () => {
        // pakai parameter seperti dibawah ini.
        const [zaxch, marsh] = await prismaClient.$transaction( async (prisma) => {
            // dua data dibawah akan masuk kedalam destructuring/ masuk ke var zaxch and marsh.
            const zizi = await prisma.customer.create({
                data: {
                    id : 5,
                    name: 'ziziziiz',
                    email: 'zaxs@gmail.com',
                    phone: '1230421',
                },
            });
            const cacaca = await prisma.customer.create({
                data: {
                    id: 6,
                    name: 'cacacaca',
                    phone: '1234102',
                    email: 'ahasaha@gmail.com', 
                }
            });
            
            return [zizi, cacaca];

        });
        
        console.log(zaxch);
        console.log(marsh);

        expect(zaxch.name).toBe('ziziziiz');
        expect(marsh.name).toBe('cacacaca');
    })
});
