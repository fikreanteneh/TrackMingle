import CustomError from "./custom.error";

export default class AuthorizationError extends CustomError {
  public status: number;
  constructor(errors: string[]) {
    super("Unauthorized", 401, errors);
    this.status = 401;
    Error.captureStackTrace(this, this.constructor);
  }
}
