import CustomError from "./custom.error";

export default class NotFoundError extends CustomError { 
    constructor(message: string = "Resource Not Found") {
        super(message, 404);
        Error.captureStackTrace(this, this.constructor);
    }
}