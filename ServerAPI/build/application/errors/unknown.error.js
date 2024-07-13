import CustomError from "./custom.error";
export default class UnknownError extends CustomError {
    constructor(message = "Something Went Wrong") {
        super(message, 500);
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=unknown.error.js.map