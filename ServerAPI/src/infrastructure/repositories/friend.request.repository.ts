import { PrismaClient } from "@prisma/client/extension";
import Repository from "./generic.repository";
import { FriendRequest } from "../models/friend.request.model";

export default class FriendRequestRepository extends Repository<FriendRequest> {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.FriendRequest, prisma);
    this.prisma = prisma;
  }

  public async getFriends(
    id: string,
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<FriendRequest[]> {
    const records = await this.model.findMany({
      where: {
        userId: id,
      },
      skip: pageNumber * pageSize,
      take: pageSize,
      include: {
        Friend: true,
      },
    });
    return records;
  }
}
