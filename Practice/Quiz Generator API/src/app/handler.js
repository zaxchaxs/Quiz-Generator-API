import { ResponseError } from "../error/responseError.js";
import { registerUserValidation } from "../validation/validation";
import { prismaClient } from './prisma-client.js';
import bcrypt from 'bcrypt';

const registerUser = async (req, res, next) => {
    try {
        const user = registerUserValidation.validate(req.body,{
            abortEarly: true,
        });
        const countUser = await prismaClient.user.count({
            where: {
                username: user.value.usernamme
            }
        });

        if(user.error) {
            throw new ResponseError(400, user.error.message)
        }

        if(countUser === 1){
            throw new ResponseError(400, "Username already exists")
        } else {
            user.value.password = await bcrypt.hash(user.value.password, 10);
            const result = await prismaClient.user.create({
                data: user.value,
                select: {
                    username: true,
                    name: true
                }
            });
            res.status(200)
                .json(result);   
        };
    } catch (e) {
        next(e)
    }

};

export {
    registerUser
}