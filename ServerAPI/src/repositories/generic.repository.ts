import { PrismaClient } from "@prisma/client";

export default class Repository<T> {
  model: any;
  prisma: PrismaClient;

  constructor(model: any, prisma: PrismaClient) {
    this.model = model;
    this.prisma = prisma;
  }
  public async executeTransaction(
    operations: Promise<any>[]
  ): Promise<unknown[]> {
    return this.prisma.$transaction(operations as any);
  }

  public async create(payload: T): Promise<T> {
    const record = await this.model.create({
      data: payload,
    });
    return record;
  }

  public async update(id: string, payload: T): Promise<T | null> {
    const record = await this.model.update({
      where: { id: id },
      data: payload,
    });
    return record;
  }

  public async delete(id: string): Promise<T | null> {
    const record = await this.model.delete({
      where: { id: id },
    });
    return record;
  }

  public async getById(id: string): Promise<T | null> {
    const record = await this.model.findUnique({
      where: { id: id },
    });
    return record;
  }
  public async getAll(
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<T[]> {
    const records = await this.model.findMany({
      take: pageSize,
      skip: pageSize * pageNumber,
    });
    return records;
  }
}
