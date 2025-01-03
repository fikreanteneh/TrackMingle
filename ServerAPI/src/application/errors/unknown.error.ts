import CustomError from "./custom.error";

export default class UnknownError extends CustomError {
  constructor(errors: string[]) {
    super("Something Went Wrong", 500, errors);
    Error.captureStackTrace(this, this.constructor);
  }
}
