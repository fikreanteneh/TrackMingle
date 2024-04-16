import { AuthDetailDTO } from "../dtos/auth.dto";
import { FriendRequestGetParam } from "../dtos/friend.request.dto";
import { IDParam, PageParam } from "../dtos/request.dto";
import { IFriendRepository } from "../interfaces/persistence/friend.repository";
import { IFriendRequestRepository } from "../interfaces/persistence/friend.request.repository";
import FriendRepository from './../../infrastructure/repositories/friend.repository';

class FriendRequestService {
    private friendRequestRepository: IFriendRequestRepository;
    private FriendRepository: IFriendRepository;
  constructor(friendRequestRepository: IFriendRequestRepository, friendRepository: IFriendRepository) {
      this.friendRequestRepository = friendRequestRepository;
      this.FriendRepository = friendRepository;
  }

  public async getFriendRequests(
    currUser: AuthDetailDTO,
    payload: null,
    params: FriendRequestGetParam
  ): Promise<any> {
    //TODO: Implement Filtering Response Data
    const data = await this.friendRequestRepository.getByReceiverID(
      params.id,
      params.pageSize,
      params.pageNumber
    );
    return data;
  }

  public async getSentFriendRequests(
    currUser: AuthDetailDTO,
    payload: null,
    params: FriendRequestGetParam
  ): Promise<any> {
    //TODO: Implement Filtering Response Data
    return await this.friendRequestRepository.getBySenderID(
      params.id,
      params.pageSize,
      params.pageNumber
    );
  }

  public async createFriendRequest(
    currUser: AuthDetailDTO,
    payload: null,
    params: IDParam
  ): Promise<any> {
    //TODO: Impemnt filtering
    await this.friendRequestRepository.create({
      senderId: currUser.id,
      receiverId: params.id,
    });
  }

  public async acceptFriendRequest(
    currUser: AuthDetailDTO,
    payload: null,
    params: FriendRequestGetParam
  ): Promise<void> {
      //TODO: Transaction
    const data = await this.friendRequestRepository.getByID(params.id);
      if (!data) throw new Error("Friend Request Not Found");
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
      
      
  }

  public async rejectFriendRequest(
    currUser: AuthDetailDTO,
    payload: null,
    params: FriendRequestGetParam
  ): Promise<void> {
      const data = await this.friendRequestRepository.getByID(params.id);
      if (!data) throw new Error("Friend Request Not Found");
      await this.friendRequestRepository.delete(data);
  }
}
