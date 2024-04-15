import CustomError from "./custom.error";

export default class UnknownError extends CustomError {
  constructor(message: string = "Something Went Wrong") {
    super(message, 500);
    Error.captureStackTrace(this, this.constructor);
  }
}
