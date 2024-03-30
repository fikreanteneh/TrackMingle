import { PrismaClient } from "@prisma/client/extension";
import Repository from "./generic.repository";
import { User } from 'models/user.model';

export default class UserRepository extends Repository<User> {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.User, prisma);
    this.prisma = prisma;
    }
    
    public async getByUsername(username: string): Promise<User> {
      const record = await this.model.findFirst({
        where: {
          username: username,
        },
      });
      return record;
    }
}
