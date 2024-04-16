import {
  AuthDetailDTO,
  AuthLoginDTO,
  AuthRegisterDTO,
  AuthTokenDTO,
} from "../../dtos/auth.dto";

export interface IAuthenticationProvider {
  signin(
    currUser: null,
    dtos: AuthLoginDTO,
    param: null
  ): Promise<AuthTokenDTO>;
  register(
    currUser: null,
    dtos: AuthRegisterDTO,
    param: null
  ): Promise<AuthDetailDTO>;
  verify(
    currUser: null,
    dtos: AuthTokenDTO,
    param: null
  ): Promise<AuthDetailDTO>;
}
