import { PrismaClient } from "@prisma/client/extension";
import { IFriendRequestRepository } from "../../application/interfaces/persistence/friend.request.repository";
import { FriendRequestModel } from "../../domain/models/friend.request.model";
import GenericRepository from "./generic.repository";

export default class FriendRequestRepository
  extends GenericRepository<FriendRequestModel>
  implements IFriendRequestRepository
{
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.FriendRequest, prisma);
    this.prisma = prisma;
  }
  public async getBySenderID(
    id: string,
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<FriendRequestModel> {
    const records = await this.model.findMany({
      where: {
        senderId: id,
      },
      skip: pageNumber * pageSize,
      take: pageSize,
      include: {
        Receiver: true,
      },
    });
    return records;
  }
  public async getByReceiverID(
    id: string,
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<FriendRequestModel> {
    const records = await this.model.findMany({
      where: {
        recieverId: id,
      },
      skip: pageNumber * pageSize,
      take: pageSize,
      include: {
        Sender: true,
      },
    });
    return records;
  }
}
