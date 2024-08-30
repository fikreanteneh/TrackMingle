import CustomError from "./custom.error";

export default class NotFoundError extends CustomError {
  constructor(errors: string[]) {
    super("Not Found", 404, errors);
    Error.captureStackTrace(this, this.constructor);
  }
}
