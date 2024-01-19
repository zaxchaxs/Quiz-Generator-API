import Joi from 'joi';

describe("Joi", () => {
    it("should return error", () => {
        const userNameSchema = Joi.string().email().min(5).required();

        const result = userNameSchema.validate('Irzi');

        console.log(result.error.details);
    });

    it("should return error with details", () => {
        const userNameSchema = Joi.string().email().min(5).required();

        const result = userNameSchema.validate('Irzi', {
            abortEarly: false,
            // liat aja di dokumetasi option validate https://joi.dev/api/?v=17.9.1#anyvalidatevalue-options
        });

        result.error.details.forEach(details => {
            console.log(details.message);
        });
    });
});

