import { AuthDetailDTO } from "../dtos/auth.dto";
import {
  UpdateFullNameDTO,
  UpdateLinksDTO,
  UpdateUsernameDTO,
  UserCreateDTO,
  UserDTO,
} from "../dtos/user.dto";
import { IAuthenticationProvider } from "../interfaces/authentication/authentication.provider";
import { IUserRepository } from "../interfaces/persistence/user.repository";

//TODO: Search Service
export default class UserService {
  private userRepository: IUserRepository;
  constructor(
    userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }
}
