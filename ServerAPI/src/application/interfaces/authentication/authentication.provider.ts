import {
  AuthDetailDTO,
  AuthLoginDTO,
  AuthRegisterDTO,
  AuthTokenDTO,
} from "../../dtos/auth.dto";

export interface IAuthenticationProvider {
  signin(payload: AuthLoginDTO): Promise<AuthTokenDTO>;
  register(payload: AuthRegisterDTO): Promise<AuthDetailDTO>;
  verify(payload: AuthTokenDTO): Promise<AuthDetailDTO>;
}
