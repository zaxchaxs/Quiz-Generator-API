import express from 'express';
import { registerUser } from '../app/handler.js';

const userRoute = new express.Router();

userRoute.post('/quizeez/users/register', registerUser);

export {
    userRoute
}