import { singleton } from "tsyringe";
import { AuthDetailDTO } from "../dtos/auth.dto";
import {
  UpdateFullNameDTO,
  UpdateLinksDTO,
  UpdateUsernameDTO,
  UserCreateDTO,
  UserDTO,
  UserPersonalDTO,
} from "../dtos/user.dto";
import { IAuthenticationProvider } from "../interfaces/authentication/authentication.provider";
import { IUserRepository } from "../interfaces/persistence/user.repository";

//TODO: Search Service
@singleton()
export default class ProfileService {
  private userRepository: IUserRepository;
  private authProvider: IAuthenticationProvider;
  constructor(
    userRepository: IUserRepository,
    authProvider: IAuthenticationProvider
  ) {
    this.userRepository = userRepository;
    this.authProvider = authProvider;
  }

  public async GetProfile(
    currUser: AuthDetailDTO,
    payload: null,
    params: null
  ): Promise<UserPersonalDTO> {
    const userDetail = await this.userRepository.getByID(currUser.id);
    if (!userDetail) {
      throw new Error("User not found");
    }
    return userDetail as UserPersonalDTO;
  }

  public async CreateProfile(
    currUser: AuthDetailDTO,
    payload: UserCreateDTO,
    params: null
  ): Promise<UserDTO> {
    const userDetail = (await this.userRepository.create({
      ...payload,
      id: currUser.id,
      email: currUser.email,
    })) as UserDTO;
    await this.authProvider.updateMetadata(currUser.id, {
      userId: userDetail.id,
      fullName: payload.fullName,
      username: payload.username,
      profilePicture: null,
    });
    return userDetail;
  }

  public async UpdateLinks(
    currUser: AuthDetailDTO,
    payload: UpdateLinksDTO,
    params: null
  ): Promise<UserDTO> {
    const userDetail = await this.userRepository.getByID(currUser.id);
    if (!userDetail) {
      throw new Error("User not found");
    }
    return (await this.userRepository.update({
      ...userDetail,
      ...payload,
    })) as UserDTO;
  }

  public async UpdateUsername(
    currUser: AuthDetailDTO,
    payload: UpdateUsernameDTO,
    params: null
  ): Promise<UserDTO> {
    const userDetail = await this.userRepository.getByID(currUser.id);
    if (!userDetail) {
      throw new Error("User not found");
    }
    //TODO: Check if username is unique
    userDetail.username = payload.username;
    currUser.metadata.username = payload.username;
    await Promise.all([
      this.userRepository.update(userDetail),
      this.authProvider.updateMetadata(currUser.id, currUser.metadata),
    ]);
    return userDetail as UserDTO;
  }
  public async UpdateFullName(
    currUser: AuthDetailDTO,
    payload: UpdateFullNameDTO,
    params: null
  ): Promise<UserDTO> {
    const userDetail = await this.userRepository.getByID(currUser.id);
    if (!userDetail) {
      throw new Error("User not found");
    }
    //TODO: Check if username is unique
    userDetail.fullName = payload.fullName;
    currUser.metadata.fullName = payload.fullName;
    await Promise.all([
      this.userRepository.update(userDetail),
      this.authProvider.updateMetadata(currUser.id, currUser.metadata),
    ]);
    return userDetail as UserDTO;
  }

  //TODO: Profile Picture
}
