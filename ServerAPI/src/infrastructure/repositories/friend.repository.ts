import { PrismaClient } from "@prisma/client/extension";
import { inject, singleton } from "tsyringe";
import { IFriendRepository } from "../../application/interfaces/persistence/friend.repository";
import { FriendModel } from "../../domain/models/friend.model";
import GenericRepository from "./generic.repository";

@singleton()
export default class FriendRepository
  extends GenericRepository<FriendModel>
  implements IFriendRepository {
  prisma: PrismaClient;

  constructor(@inject("PrismaClient") prisma: PrismaClient) {
    super(prisma.Friend, prisma);
    this.prisma = prisma;
  }
  public async getFriendsByIDMinimal(id: string, pageSize: number = 100,
    pageNumber: number = 0): Promise<FriendModel[]> {
    const record = await this.model.findMany({
      where: { userId: id },
      skip: pageNumber * pageSize,
      take: pageSize,
      select: { friendId: true },
    });
    return record;
  }

  public async getFriendsByID(
    id: string,
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<FriendModel[]> {
    const records = await this.model.findMany({
      where: {
        userId: id
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
