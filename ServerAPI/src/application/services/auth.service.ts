import { AuthDetailDTO, AuthLoginDTO, AuthRegisterDTO, AuthTokenDTO } from "../dtos/auth.dto";
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
    payload: AuthRegisterDTO,
    params: null
  ): Promise<UserDTO> {
    const userDetail = await this.authProvider.register(payload);
    const user = await this.userRepository.create({
      id: userDetail.id,
      email: userDetail.email,
      username: payload.username,
      fullName: payload.fullName,
    });
    return user as UserDTO;
  }

  async login(currUser: null, payload: AuthLoginDTO, param: null): Promise<AuthTokenDTO> {
    return await this.authProvider.signin(payload);
  }
  //TODO: Implement Change Phone Number and Email and Password
}
