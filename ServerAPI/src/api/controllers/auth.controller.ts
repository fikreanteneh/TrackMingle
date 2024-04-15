// import { responseHandler } from "src/middlewares/response.middleware";
import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import {
  AuthBase,
  AuthLogin,
  AuthLoginSuccess,
} from "../../application/dtos/auth.dto";
import { db } from "../../config/prisma";
import { responseHandler } from "../../middlewares/response.middleware";
import AuthRepository from "../../repositories/auth.repository";
import UserRepository from "../../repositories/user.repository";
import { ResponseSuccessType } from "../../types/request.types";
import AuthServices from "./auth.service";

const database = db();

@Tags("Authentication")
@Route("auth")
export class AuthRoute {
  @Post("register")
  @SuccessResponse("201")
  public async register(
    @Body() requestBody: AuthBase
  ): Promise<ResponseSuccessType<AuthLoginSuccess>> {
    const service = new AuthServices(
      new AuthRepository(database),
      new UserRepository(database)
    );
    return responseHandler(service.register(requestBody));
  }

  @Post("login")
  @SuccessResponse("200")
  public async login(
    @Body() requestBody: AuthLogin
  ): Promise<ResponseSuccessType<AuthLoginSuccess>> {
    const service = new AuthServices(
      new AuthRepository(database),
      new UserRepository(database)
    );
    return responseHandler(service.login(requestBody));
  }
}
