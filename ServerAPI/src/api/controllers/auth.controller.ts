// import { responseHandler } from "src/middlewares/response.middleware";
import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import { AuthLoginDTO, AuthRegisterDTO, AuthTokenDTO } from "../../application/dtos/auth.dto";
import { UserDTO } from "../../application/dtos/user.dto";
import { responseHandler, ResponseSuccessType } from "../middlewares/response.middleware";
import AuthService from "../../application/services/auth.service";
import AuthenticationProvider from "../../infrastructure/authentication/authentication.provider";
import UserRepository from "../../infrastructure/repositories/user.repository";
import supabase from "../../config/supabase";
import { prisma } from "../../config/prisma";



@Tags("Authentication")
@Route("auth")
export class AuthController {
  @Post("register")
  @SuccessResponse("201")
  public async register(
    @Body() requestBody: AuthRegisterDTO
  ): Promise<ResponseSuccessType<UserDTO>> {
    const service = new AuthService(
      new AuthenticationProvider(supabase()),
      new UserRepository(prisma())
    );
    return responseHandler(service.register(null, requestBody, null));
  }

  @Post("login")
  @SuccessResponse("200")
  public async login(
    @Body() requestBody: AuthLoginDTO
  ): Promise<ResponseSuccessType<AuthTokenDTO>> {
    const service = new AuthService(
      new AuthenticationProvider(supabase()),
      new UserRepository(prisma())
    );
    return responseHandler(service.login(null, requestBody, null));
  }
}
