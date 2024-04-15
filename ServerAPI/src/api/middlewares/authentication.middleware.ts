import { Request } from "express";
import AuthenticationError from "../errors/authentication.error";
import UnknownError from "../errors/unknown.error";
import {} from "../types/token.types";
import { decodeToken } from "../utils/tokens";
import { AuthenticatedUser } from "./../types/token.types";

const expressAuthentication = async (
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<AuthenticatedUser> => {
  if (!scopes) throw new UnknownError();
  return new Promise((resolve, reject) => {
    const bearer = (request.headers.Authorization ||
      request.headers.authorization ||
      "") as string;
    if (!bearer) reject(new AuthenticationError());
    const token = bearer.split(" ")[1].trim();
    const authenticatedUser = decodeToken(token);
    resolve(authenticatedUser);
  });
};

export { expressAuthentication };
