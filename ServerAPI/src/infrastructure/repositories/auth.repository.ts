import { PrismaClient } from "@prisma/client/extension";
import Repository from "./generic.repository";
import { Auth } from "../models/auth.model";

export default class AuthRepository extends Repository<Auth> {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.Auth, prisma);
    this.prisma = prisma;
  }

  public async getByEmail(email: string): Promise<Auth> {
    const record = await this.model.findFirst({
      where: {
        email: email,
      },
    });
    return record;
  }

  public async getByPhoneNumber(phoneNumber: string): Promise<Auth> {
    const record = await this.model.findFirst({
      where: {
        phoneNumber: phoneNumber,
      },
    });
    return record;
  }
}
