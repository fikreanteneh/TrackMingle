export default class CustomError extends Error {
  public status: number;
  public errors: string[];
  constructor(message: string, status: number, errors: string[]) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}
