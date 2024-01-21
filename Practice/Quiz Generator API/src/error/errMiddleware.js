import { ResponseError } from "./responseError.js";

const errorMiddleware = async (err, req, res, next) => {
    if(!err) {
        next();
        return;
    }
    if(err instanceof ResponseError) {
        res.status(err.status)
            .json({
                errors: err.message
            })
            .end();
            console.log(err.message)
    } else {
        res.status(500)
            .json({
                errors: err.message
            })
            .end();
    }
};

export {
    errorMiddleware
}