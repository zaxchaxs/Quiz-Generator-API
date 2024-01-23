import express from 'express';
import { currentUser, getQuestions, loginUser, logoutUser, registerUser, updateUser } from '../app/handler.js';

const userRoute = new express.Router();

userRoute.post('/quizeez/users/register', registerUser);
userRoute.post('/quizeez/users/login', loginUser);
userRoute.get('/quizeez/users/user', currentUser);
userRoute.patch('/quizeez/users/user', updateUser);
userRoute.patch('/quizeez/users/logout', logoutUser);

// Get Quiz
userRoute.get('/quizeez/questions/:category?', getQuestions)


export {
    userRoute
}