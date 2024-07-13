import CustomError from "./custom.error";
export default class ValidationError extends CustomError {
    constructor(message) {
        super(message, 400);
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=validation.error.js.map