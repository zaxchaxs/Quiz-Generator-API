import Joi from 'joi';

// NOTE : Urutannya (bulan-tanggal-tahun).
describe("Joi", () => {
    //     it("Should can validate date", () => {
    //     // const date = Joi.date().greater('05-01-2003');
    //     const birthDateValidate = Joi.date().min("06-21-2004").max('now').required();
            
    //     // date.validate('02-04-2005');

    //     const result = birthDateValidate.validate('06-20-2004'); //error karena dibawah minimal
    //     const result2 = birthDateValidate.validate('01-11-2024');
    //     const result3 = birthDateValidate.validate('01-12-2024'); //error karena diatas 'now' (file ini dibuat 1-11-2024);

    //     // tipe data result akan menyesuaikan dengan jenis methodnya, misal jika kita menggunakan .string() akan menghasilkan string, .number() akan integer, dll.

    //     console.log(result);
    //     console.log(result2);
    //     console.log(result3);
    //     // console.log(`Isi console 3 : ${JSON.stringify(result3.error.details)}`);
    // });

    // Validation Error
    it("Testing date.iso", () => {
        const dateIso = Joi.date().iso();
        const result = dateIso.validate('12-03-2003');

        console.log(JSON.stringify(result.error.details));
    })
});
