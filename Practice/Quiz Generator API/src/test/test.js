import { prismaClient } from "../app/prisma-client.js";
import bycrpt from 'bcrypt'

const testRegisterUser = async () => {
    const data = {
        username: "testingUsername",
        password: "testingPassword",
        name: "testingName"
    };
    data.password = await bycrpt.hash(data.password, 10)
    await prismaClient.user.create({
        data: data,
        select: {
            username: true,
            name: true
        }
    })
}

export {
    testRegisterUser
}