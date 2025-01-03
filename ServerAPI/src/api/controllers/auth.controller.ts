// import { responseHandler } from "src/middlewares/response.middleware";
import { Body, Controller, Post, Route, SuccessResponse, Tags } from "tsoa";
import { injectable } from "tsyringe";
import { AuthDTO, AuthTokenDTO } from "../../application/dtos/auth.dto";
import AuthService from "../../application/services/auth.service";
import {
  responseHandler,
  ResponseSuccessType,
} from "../middlewares/response.middleware";
import { UserCreateDTO } from "../../application/dtos/user.dto";

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
    @Body() requestBody: AuthDTO & UserCreateDTO
  ): Promise<ResponseSuccessType<AuthTokenDTO>> {
    const response = await this.authService.registerWithEmail(
      null,
      requestBody,
      null
    );
    return responseHandler<AuthTokenDTO>(response);
  }

  @Post("login")
  @SuccessResponse("200")
  public async login(
    @Body() requestBody: AuthDTO
  ): Promise<ResponseSuccessType<AuthTokenDTO>> {
    const response = await this.authService.login(null, requestBody, null);
    return responseHandler<AuthTokenDTO>(response);
  }
}
