import { ResponseError } from "../error/responseError.js";
import { registerUserValidation, updateUserValidation } from "../validation/validation.js";
import { prismaClient } from './prisma-client.js';
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import axios from 'axios';

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
            throw new ResponseError(401, "Unauthorized")
        };


        res.status(200)
            .json(user);

    } catch(e) {
        next(e)
    }
;}

const updateUser = async (req, res, next) => {
    try{
        const user = updateUserValidation.validate(req.body, {     
            abortEarly: false,
        });
        if(user.error){
            throw new ResponseError(400, user.error.message)
        };

        const findUser = await prismaClient.user.findUnique({
            where: {
                username: user.value.username
            },
            select: {
                token: true
            }
        })
        if(!findUser) {
            throw new ResponseError(404, "Username not found")
        };
        if(!findUser.token) {
            throw new ResponseError(401, "Unauthorized")
        }

        const currData = {};
        currData.password = await bcrypt.hash(user.value.password, 10);
        currData.name = user.value.name;
        const result = await prismaClient.user.update({
            data: currData,
            where: {
                username : user.value.username
            },
            select: {
                username: true,
                name: true
            }
        });
        res.status(200)
            .json(result);

    } catch(e) {
        next(e);
    }
};

const logoutUser = async (req, res, next) => {
    try{
        const user = req.body;
        const findUser = await prismaClient.user.findUnique({
            where:{
                username: user.username
            },
            select: {
                token: true
            }
        });
        if (!findUser) {
            throw new ResponseError(404, "User not found")
        };
        if(!findUser.token) {
            throw new ResponseError(401, "Unauthorized")
        };

        res.status(200)
        .json({
            "message": "OK"
        })
        return prismaClient.user.update({
            data: {
                token: null
            },
            where: {
                username: user.username
            }
        });


    }catch(e) {
        next(e)
    }
};

const getQuestions = async (req, res, next) => {
    try {
        // const category = req.params.category;
        const apiKey = "U7dw30B7eCiLRa6kSilrdFMq6K653bSNwuHBfEUS"
        let params = req.params.category;
        if(params === undefined) {
            params = '';
        } else {
            params = '&category=' + req.params.category;
        }

        const response = await axios.get('https://quizapi.io/api/v1/questions/?limit=20' + params, {
            headers:{
                'X-Api-Key': apiKey
            }
        });

        res.status(response.status)
        .json(response.data);
        
    } catch(e) {
        res.status(e.response.status)
            .json(e.response.data)
            .end()
    }
};





export {
    registerUser,
    loginUser,
    currentUser,
    updateUser,
    logoutUser,
    getQuestions
}