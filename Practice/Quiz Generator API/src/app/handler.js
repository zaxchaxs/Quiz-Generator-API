import { ResponseError } from "../error/responseError.js";
import { registerUserValidation } from "../validation/validation";
import { prismaClient } from './prisma-client.js';
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

const registerUser = async (req, res, next) => {
    try {
        const user = registerUserValidation.validate(req.body,{
            abortEarly: true,
        });
        const countUser = await prismaClient.user.count({
            where: {
                username: user.value.username
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
        console.log(e)
        next(e)
    }

};

const loginUser = async (req, res, next) => {
    try {
        const userRequest = req.body;

        const user = await prismaClient.user.findUnique({
            where: {
                username: userRequest.username
            },
            select: {
                username: true,
                password: true
            }
        });

        if(!user) {
            throw new ResponseError(400, "Username or password wrong")
        };

        const isPasswordValid = await bcrypt.compare(userRequest.password, user.password);

        if(!isPasswordValid) {
            throw new ResponseError(400, "Username or password wrong")
        };

        const token = uuid().toString();
        const result = await prismaClient.user.update({
            data: {
                token: token
            },
            where: {
                username: userRequest.username
            },
            select: {
                token: true
            }
        });
        res.status(200)
            .json(result)


    } catch(e) {
        next(e)
    }
}

const currentUser = async (req, res, next) => {
    try{
        const userRequest = req.body;
        const user = await prismaClient.user.findUnique({
            where: {
                username: userRequest.username
            },
            select: {
                username: true,
                name: true,
                token: true
            },
        });
        
        if(!user) {
            throw new ResponseError(404, "Username not found")
        };

        if(!user.token) {
            throw new ResponseError(400, "Unauthorized")
        };


        res.status(200)
            .json(user);

    } catch(e) {
        next(e)
    }
;}

export {
    registerUser,
    loginUser,
    currentUser
}