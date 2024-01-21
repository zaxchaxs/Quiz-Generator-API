import Joi from 'joi';

const registerUserValidation = Joi.object({
    username: Joi.string().min(4).max(100).required(),
    password: Joi.string().min(6).max(100).required(),
    name: Joi.string().min(1).max(200).required()
});

const updateUserValidation = Joi.object({
    name: Joi.string().min(1).max(200),
    password: Joi.string().min(6).max(200)
});

export {
    registerUserValidation,
    updateUserValidation
}