import Joi from 'joi';

describe("Joi", () => {
    it("Should can create schema", () => {
        const schema = Joi.string().min(5).max(8).required();
        const name = 'Marsha';
        // const name = 'Irzi';

        const result = schema.validate(name);
        if(result.error) {
            console.log(result.error)
        };
    });

    it('Should can validate basic data', () => {
        const userNameSchema = Joi.string().email().required();
        const isAdminSchema = Joi.boolean().required();
        const priceSchme = Joi.number().min(5000).max(10000).required();

        const resultUsernam = userNameSchema.validate('irzirahmatullah@gmail.cos'); // error karena .cos
        const resultIsAdminSchema = isAdminSchema.validate(true);
        const resultPriceSchme = priceSchme.validate(5000);

        console.log(resultUsernam);
        console.log(resultIsAdminSchema);
        console.log(resultPriceSchme);
    });
})