// import { PrismaClient } from '@prisma/client';

import { prismaClient } from "../src/prisma-client";


describe('Prisma Client', () => {
    it('should be able to connect to database', async () => {
        // const prisma = new PrismaClient();
        await prismaClient.$connect();

        // do somethings, like insert/update/drop data dan lain lain.

        await prismaClient.$disconnect();
    })
});
