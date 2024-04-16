import { PrismaClient } from "@prisma/client/extension";
import GenericRepository from "./generic.repository";
import { UserModel } from "../../domain/models/user.model";
import { IUserRepository } from "../../application/interfaces/persistence/user.repository";

export default class UserRepository extends GenericRepository<UserModel> implements IUserRepository {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.User, prisma);
    this.prisma = prisma;
    }
  public async getByUsername(username: string): Promise<UserModel> {
    const record = await this.model.findUnique({
      where: { username: username },
    });
    return record;

  }
  public async getByEmail(email: string): Promise<UserModel> {
    const record = await this.model.findUnique({
      where: { email: email },
    });
    return record;
  }
  public async getByPhoneNumber(phoneNumber: string): Promise<UserModel> {
    const record = await this.model.findUnique({
      where: { phoneNumber: phoneNumber },
    });
    return record;
  }
  public async search(query: string, pageNumber: number, pageSize: number): Promise<UserModel[]> {
    //TODO: Implement completed search method
    const records = await this.model.findMany({
      where: {
        OR: [
          { username: { contains: query } },
          { email: { contains: query } },
          { phoneNumber: { contains: query } },
        ],
      },
      take: pageSize,
      skip: pageSize * pageNumber,
    });
    return records;
  }
  public async getByID(id: string): Promise<UserModel | null> {
    const record = await this.model.findUnique({
      where: { id: id },
    });
    return record;
  }
  
}
