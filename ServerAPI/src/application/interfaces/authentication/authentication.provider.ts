import { AuthDetailDTO, AuthTokenDTO } from "../../dtos/auth.dto";

export interface IAuthenticationProvider {
  login(currUser: any, dtos: any, param: any): Promise<AuthTokenDTO>;
  register(currUser: any, dtos: any, param: any): Promise<AuthDetailDTO>;
  verify(currUser:any, dtos: any, param:any): Promise<AuthDetailDTO>;
}