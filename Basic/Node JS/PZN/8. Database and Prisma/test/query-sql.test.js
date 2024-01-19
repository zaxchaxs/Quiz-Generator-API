import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be able to execute sql", async () => {
        const id = 1;
        const name = 'Irzi Rahmatullah';

        // Contoh query sql lewat prisma, pakai queryRaw seperti ini.
        // Hasilnya var samples nya akan jadi sebuah array of object.
        const samples = await prismaClient.$queryRaw`SELECT * FROM sample`

        for (const sample of samples) {
            console.log(`Result sample id : ${sample.id}, Name : ${sample.name}, mood : ${sample.mood}`);
        }

        console.log(samples);
        // Hasilnya akan berupa array of objct, yang setiap object merepresentasikan tiap kolomnya.
    })
})

