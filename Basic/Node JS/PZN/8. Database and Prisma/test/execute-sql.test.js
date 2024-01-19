import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be able to execute sql", async () => {
        const id = 4;
        const name = 'Zirrah';

        // Contoh execute sql lewat prisma, pakai executeRaw seperti ini.
        const impacted = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
        // Setelah dijalankan datanya akan dimasukkan kedalam database;

        // const impacted = await prismaClient.$executeRaw`DELETE FROM sample WHERE id = ${id};`
        console.log(`Isi dari impacted yaitu : ${impacted}`);

        expect(impacted).toBe(1);
    })
})

