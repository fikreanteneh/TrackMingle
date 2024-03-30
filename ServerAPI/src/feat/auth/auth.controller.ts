import { responseHandler } from "middlewares/response.middleware";
import { AuthBase, AuthLogin, AuthLoginSuccess } from "models/auth.model";
import AuthRepository from "repositories/auth.repository";
import UserRepository from "repositories/user.repository";
import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import { ResponseSuccessType } from "types/request.types";
import { db } from "../../config/database";
import AuthServices from "./auth.service";

const database = db();

@Tags("Customer Authentication")
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
