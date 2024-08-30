import { Request } from "express";
import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import AuthenticationError from "../../application/errors/authentication.error";
import UnknownError from "../../application/errors/unknown.error";
import supabase from "../../config/supabase";
import AuthenticationProvider from "./../../infrastructure/authentication/authentication.provider";

const expressAuthentication = async (
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<AuthDetailDTO> => {
  if (!scopes) throw new UnknownError([]);
  return new Promise(async (resolve, reject) => {
    const bearer = (request.headers.Authorization ||
      request.headers.authorization ||
      "") as string;
    if (!bearer) reject(new AuthenticationError(["You are not logged in"]));
    const token = bearer.split(" ")[1].trim();
    const authDetail = await new AuthenticationProvider(supabase()).verify({
      token,
    });
    if (!authDetail) reject(new AuthenticationError(["You are not logged in"]));
    resolve(authDetail);
  });
};

export { expressAuthentication };
