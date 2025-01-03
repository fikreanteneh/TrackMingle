import { inject, injectable, singleton } from "tsyringe";
import { AuthDTO, AuthTokenDTO } from "../dtos/auth.dto";
import { UserCreateDTO } from "../dtos/user.dto";
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

  async login(
    currUser: null,
    payload: AuthDTO,
    param: null
  ): Promise<AuthTokenDTO> {
    return await this.authProvider.signIn(payload);
  }

  async registerWithEmail(
    currUser: null,
    payload: AuthDTO & UserCreateDTO,
    params: null
  ): Promise<AuthTokenDTO> {
    const auth = await this.authProvider.register(payload);

    const user = await this.userRepository.create({
      id: auth.id,
      username: payload.username,
      fullName: payload.fullName,
      email: auth.email,
    });

    await this.authProvider.updateMetadata(auth.id, {
      username: payload.username,
      fullName: payload.fullName,
      userId: user.id as string,
      profilePicture: null,
    });

    return this.authProvider.signIn(payload);
  }

  //TODO: Registered with Phone Number
  //TODO: Registered with Google
  //TODO: Implement Change Phone Number
  //TODO: Implement Change Email
  //TODO: Implement Change Password
  //TODO: Implement Forgot Password
  //TODO: Implement Verify Email and Password
}
