import { AuthDetailDTO } from "../../application/dtos/auth.dto";
import AuthenticationError from "../../application/errors/authentication.error";
import UnknownError from "../../application/errors/unknown.error";
import supabase from "../../config/supabase";
import AuthenticationProvider from './../../infrastructure/authentication/authentication.provider';
import { Request } from "express";


const expressAuthentication = async (
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<AuthDetailDTO> => {
  if (!scopes) throw new UnknownError();
  return new Promise(async (resolve, reject) => {
    const bearer = (request.headers.Authorization ||
      request.headers.authorization ||
      "") as string;
    if (!bearer) reject(new AuthenticationError());
    const token = bearer.split(" ")[1].trim();
    const authDetail = await ((new AuthenticationProvider(supabase())).verify({ token }));
    console.log("authDetail ======= ", authDetail);
    if (!authDetail) reject(new AuthenticationError());
    resolve(authDetail);
  });
};

export { expressAuthentication };
