import { singleton } from "tsyringe";
import { AuthDetailDTO } from "../dtos/auth.dto";
import {
  FriendRequestCreateDTO,
  FriendRequestDetailDTO,
} from "../dtos/friend.request.dto";
import { IDParam, PageParam } from "../dtos/request.dto";
import NotFoundError from "../errors/notfound.error";
import { IFriendRepository } from "../interfaces/persistence/friend.repository";
import { IFriendRequestRepository } from "../interfaces/persistence/friend.request.repository";

@singleton()
export class FriendRequestService {
  private friendRequestRepository: IFriendRequestRepository;
  private FriendRepository: IFriendRepository;
  constructor(
    friendRequestRepository: IFriendRequestRepository,
    friendRepository: IFriendRepository
  ) {
    this.friendRequestRepository = friendRequestRepository;
    this.FriendRepository = friendRepository;
  }

  public async getFriendRequests(
    currUser: AuthDetailDTO,
    payload: null,
    params: PageParam
  ): Promise<FriendRequestDetailDTO> {
    //TODO: Implement Filtering Response Data
    const data = await this.friendRequestRepository.getByReceiverID(
      currUser.id,
      params.pageSize ?? 20,
      params.pageNumber ?? 0
    );
    return data as FriendRequestDetailDTO;
  }

  public async getSentFriendRequests(
    currUser: AuthDetailDTO,
    payload: null,
    params: PageParam
  ): Promise<FriendRequestDetailDTO> {
    //TODO: Implement Filtering Response Data
    return (await this.friendRequestRepository.getBySenderID(
      currUser.id,
      params.pageSize,
      params.pageNumber
    )) as FriendRequestDetailDTO;
  }

  public async createFriendRequest(
    currUser: AuthDetailDTO,
    payload: FriendRequestCreateDTO,
    params: null
  ): Promise<null> {
    //TODO: Implement filtering
    await this.friendRequestRepository.create({
      senderId: currUser.id,
      receiverId: payload.receiverId,
    });
    return null;
  }

  //TODO : add which was the sender and recieved
  public async acceptFriendRequest(
    currUser: AuthDetailDTO,
    payload: null,
    params: IDParam
  ): Promise<null> {
    //TODO: Transaction
    const data = await this.friendRequestRepository.getByID(params.id);
    if (!data) throw new NotFoundError(["Friend Request Not Found"]);
    await Promise.all([
      this.friendRequestRepository.delete(data),
      this.FriendRepository.create({
        userId: data.senderId,
        friendId: data.receiverId,
      }),
      this.FriendRepository.create({
        userId: data.receiverId,
        friendId: data.senderId,
      }),
    ]);
    return null;
  }

  public async rejectFriendRequest(
    currUser: AuthDetailDTO,
    payload: null,
    params: IDParam
  ): Promise<null> {
    const data = await this.friendRequestRepository.getByID(params.id);
    if (!data) throw new NotFoundError(["Friend Request Not Found"]);
    await this.friendRequestRepository.delete(data);
    return null;
  }
}
