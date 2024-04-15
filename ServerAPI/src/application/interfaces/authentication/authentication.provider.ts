
export interface IAuthenticationProvider {
  login(currUser: any, dtos: any, param: any): Promise<string>;
  register(currUser: any, dtos: any, param: any): Promise<string>;
  verify(currUser:any, dtos: any, param:any): Promise<boolean>;
}