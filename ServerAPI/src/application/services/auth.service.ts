import { inject, injectable, singleton } from "tsyringe";
import { AuthDTO, AuthTokenDTO } from "../dtos/auth.dto";
import { IAuthenticationProvider } from "../interfaces/authentication/authentication.provider";
import { IUserRepository } from "../interfaces/persistence/user.repository";

@singleton()
@injectable()
export default class AuthService {
  private authProvider: IAuthenticationProvider;
  private userRepository: IUserRepository;
  constructor(
    @inject("IAuthenticationProvider") authProvider: IAuthenticationProvider,
    @inject("IUserRepository") userRepository: IUserRepository
  ) {
    this.authProvider = authProvider;
    this.userRepository = userRepository;
  }

  async register(
    currUser: null,
    payload: AuthDTO,
    params: null
  ): Promise<AuthTokenDTO> {
    //TODO: Add to User Table
    return await this.authProvider.register(payload);
  }

  async login(
    currUser: null,
    payload: AuthDTO,
    param: null
  ): Promise<AuthTokenDTO> {
    return await this.authProvider.signIn(payload);
  }
  //TODO: Implement Change Phone Number and Email and Password
}
