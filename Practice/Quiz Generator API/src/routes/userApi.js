import express from 'express';
import { currentUser, loginUser, registerUser } from '../app/handler.js';

const userRoute = new express.Router();

userRoute.post('/quizeez/users/register', registerUser);
userRoute.post('/quizeez/users/login', loginUser);
userRoute.get('/quizeez/users/user', currentUser);

export {
    userRoute
}