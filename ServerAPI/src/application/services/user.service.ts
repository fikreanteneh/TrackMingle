import { singleton } from "tsyringe";
import { PageParam } from "../dtos/request.dto";
import { UserDTO } from "../dtos/user.dto";
import { IUserRepository } from "../interfaces/persistence/user.repository";

//TODO: Search Service
@singleton()
export default class UserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async GetUserByID(
    currUser: any,
    payload: any,
    params: any
  ): Promise<UserDTO> {
    return (await this.userRepository.getByID(payload.id)) as UserDTO;
  }

  public async GetUsers(
    currUser: any,
    payload: any,
    params: PageParam
  ): Promise<UserDTO[]> {
    return (await this.userRepository.get(
      params.pageNumber,
      params.pageSize
    )) as UserDTO[];
  }
}
