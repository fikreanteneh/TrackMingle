import { inject, singleton } from "tsyringe";
import { FriendMinimalDTO } from "../dtos/friend.dto";
import { IDParam, PageParam } from "../dtos/request.dto";
import { IFriendRepository } from "../interfaces/persistence/friend.repository";
import { AuthDetailDTO } from "./../dtos/auth.dto";

@singleton()
export default class FriendService {
  private friendRepository: IFriendRepository;
  constructor(@inject("IFriendRepository") friendRepository: IFriendRepository) {
    this.friendRepository = friendRepository;
  }
  async getAllFriendsMinimal(
    currUser: AuthDetailDTO,
    payload: null,
    params: IDParam & PageParam
  ): Promise<FriendMinimalDTO> {
    const data = await this.friendRepository.getFriendsByIDMinimal(params.id, params.pageSize, params.pageNumber);
    return { friends: [...data.map((friend) => friend.friendId)] };
  }
  async getAllMyFriendsMinimal(currUser: AuthDetailDTO, payload: null, param: PageParam): Promise<FriendMinimalDTO> {
    const data = await this.friendRepository.getFriendsByIDMinimal(currUser.id, param.pageSize, param.pageNumber);
    return { friends: [...data.map((friend) => friend.friendId)] };
  }

}