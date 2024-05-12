import { AuthDTO, AuthTokenDTO } from "../dtos/auth.dto";
import { UserDTO } from "../dtos/user.dto";
import { IAuthenticationProvider } from "../interfaces/authentication/authentication.provider";
import { IUserRepository } from "../interfaces/persistence/user.repository";

export default class AuthService {
  private authProvider: IAuthenticationProvider;
  private userRepository: IUserRepository;
  constructor(
    authProvider: IAuthenticationProvider,
    usersitory: IUserRepository
  ) {
    this.authProvider = authProvider;
    this.userRepository = usersitory;
  }

  async register(
    currUser: null,
    payload: AuthDTO,
    params: null
  ): Promise<AuthTokenDTO> {
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
