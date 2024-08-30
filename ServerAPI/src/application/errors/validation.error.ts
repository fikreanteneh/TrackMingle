import CustomError from "./custom.error";

export default class ValidationError extends CustomError {
  constructor(errors: string[]) {
    super("Invalid Data", 400, errors);
    Error.captureStackTrace(this, this.constructor);
  }
}
