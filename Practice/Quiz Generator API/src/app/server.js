import express from 'express';
import { errorMiddleware } from '../error/errMiddleware.js';
import { userRoute } from '../routes/userApi.js';


export const app = express();

app.use(express.json());
app.use(userRoute);
app.use(errorMiddleware);

// app.route('/quizeez/users/register')
//     .post(registerUser)