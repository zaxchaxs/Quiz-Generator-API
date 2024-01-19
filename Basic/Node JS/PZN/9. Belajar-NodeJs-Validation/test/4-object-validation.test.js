import Joi from 'joi';

describe("Joi", () => {
    // it("should return error", () => {
    //     const loginSchema = Joi.object({
    //         username: Joi.string().min(4).max(100).email().required(),
    //         password: Joi.string().min(4).required(),
    //     });

    //     const request = {
    //         username: 'Irzirahmatullah@salahEmail.cosss',
    //         password: 'admins...',
    //         testing: 'haahahaha'
    //     };

    //     const result = loginSchema.validate(request, {
    //         abortEarly: false,
    //         // allowUnknown: true, //when true, maka properti yg tidak ada di login schema akan allow.
    //     });
    //     console.log(result.error.details);
    // });

    // NESTED OBJECT
    it("Should can validate object nested", () => {
        const userDataSchema = Joi.object({
            firstName: Joi.string().required().min(2),
            lastName: Joi.string(),
            address: Joi.object({
                street: Joi.string().max(100).required(),
                city: Joi.string().max(100).required(),
                country: Joi.string().max(100).required(),
            })
        });

        const insertData = {
            firstName: '1',
            address: {
                street: 'ajdlajdliasjldasjldas',
                city: 'dajasljdasjkasj',
            },
            age: 19,
        };

        const result = userDataSchema.validate(insertData, {
            abortEarly: false,
            allowUnknown: false,
        }); 

        // console.log(result.error.details);
        console.log(result);
    });
});

