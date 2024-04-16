import { Auth } from "@prisma/client";
import { FriendRequestDetailDTO } from "../dtos/friend.request.dto";
import { IFriendRequestRepository } from "../interfaces/persistence/friend.request.repository";
import { AuthDetailDTO } from "../dtos/auth.dto";

class FriendRequestService {
  private friendRequestRepository: IFriendRequestRepository;
  constructor(private friendRequestRepository: IFriendRequestRepository) {
    this.friendRequestRepository = friendRequestRepository;
  }

    public async getFriendRequests(
        currUser: AuthDetailDTO,
        params: { pageSize: number; pageNumber: number }
  ): Promise<FriendRequestDetailDTO[]> {
    return await this.friendRequestRepository.getByReceiverID(userId);
  }

  public async getSentFriendRequests(
    userId: string
  ): Promise<FriendRequestDetailDTO[]> {
    return await this.friendRequestRepository.getSentFriendRequests(userId);
  }

  public async createFriendRequest(
    request: CreateFriendRequestDTO
  ): Promise<void> {
    await this.friendRequestRepository.createFriendRequest(request);
  }

  public async acceptFriendRequest(
    request: AcceptFriendRequestDTO
  ): Promise<void> {
    await this.friendRequestRepository.acceptFriendRequest(request);
  }

  public async rejectFriendRequest(
    request: RejectFriendRequestDTO
  ): Promise<void> {
    await this.friendRequestRepository.rejectFriendRequest(request);
  }
}
