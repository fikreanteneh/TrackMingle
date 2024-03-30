import { Friend } from "models/friend.model";
import { PrismaClient } from "@prisma/client/extension";
import Repository from "./generic.repository";

export default class FriendRepository extends Repository<Friend> {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.FriendRequest, prisma);
    this.prisma = prisma;
  }

  public async getFriendRequestSent(
    id: string,
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<Friend[]> {
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

  public async getFriendRecieved(
    id: string,
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<Friend[]> {
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
