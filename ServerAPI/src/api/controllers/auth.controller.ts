// import { responseHandler } from "src/middlewares/response.middleware";
import { Body, Controller, Post, Route, SuccessResponse, Tags } from "tsoa";
import { AuthDTO, AuthTokenDTO } from "../../application/dtos/auth.dto";
import AuthService from "../../application/services/auth.service";
import { prisma } from "../../config/prisma";
import supabase from "../../config/supabase";
import AuthenticationProvider from "../../infrastructure/authentication/authentication.provider";
import UserRepository from "../../infrastructure/repositories/user.repository";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";
import { injectable } from "tsyringe";

@injectable()
@Tags("Authentication")
@Route("auth")
export class AuthController extends Controller {
  private authService: AuthService;
  constructor(authService: AuthService) {
    super();
    this.authService = authService;
  }

  @Post("register")
  @SuccessResponse("201")
  public async register(
    @Body() requestBody: AuthDTO
  ): Promise<ResponseSuccessType<AuthTokenDTO>> {
    // const service = new AuthService(
    //   new AuthenticationProvider(supabase()),
    //   new UserRepository(prisma())
    // );
    const response = await this.authService.register(null, requestBody, null);
    return responseHandler<AuthTokenDTO>(response);
  }

  @Post("login")
  @SuccessResponse("200")
  public async login(
    @Body() requestBody: AuthDTO
  ): Promise<ResponseSuccessType<AuthTokenDTO>> {
    // const service = new AuthService(
    //   new AuthenticationProvider(supabase()),
    //   new UserRepository(prisma())
    // );
    const response = await this.authService.login(null, requestBody, null);
    return responseHandler<AuthTokenDTO>(response);
  }
}
