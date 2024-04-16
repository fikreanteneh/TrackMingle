import { PrismaClient } from "@prisma/client";
import { IGenericRepository } from "../../application/interfaces/persistence/generic.repository";
import { BaseModel } from "../../domain/models/base.model";

export default class GenericRepository<BaseModel>
  implements IGenericRepository<BaseModel>
{
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

  public async create(payload: BaseModel): Promise<BaseModel> {
    const record = await this.model.create({
      data: payload,
    });
    return record;
  }

  public async update(payload: BaseModel): Promise<BaseModel> {
    const record = await this.model.update({
      where: { id: payload.id },
      data: payload,
    });
    return record;
  }

  public async delete(id: string): Promise<BaseModel> {
    const record = await this.model.delete({
      where: { id: id },
    });
    return record;
  }

  public async getById(id: string): Promise<BaseModel | null> {
    const record = await this.model.findUnique({
      where: { id: id },
    });
    return record;
  }
  public async get(
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<BaseModel[]> {
    const records = await this.model.findMany({
      take: pageSize,
      skip: pageSize * pageNumber,
    });
    return records;
  }
}
