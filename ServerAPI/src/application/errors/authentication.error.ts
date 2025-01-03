import CustomError from "./custom.error";

export default class AuthenticationError extends CustomError {
  constructor(errors: string[]) {
    super("Unauthenticated", 403, errors);
    Error.captureStackTrace(this, this.constructor);
  }
}
