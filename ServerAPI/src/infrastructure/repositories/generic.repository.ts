import { PrismaClient } from "@prisma/client";
import { IGenericRepository } from "../../application/interfaces/persistence/generic.repository";
import { BaseModel } from "../../domain/models/base.model";

export default class GenericRepository<T extends BaseModel> implements IGenericRepository<T> {
  model: any;
  prisma: PrismaClient;

  constructor(model: any, prisma: PrismaClient) {
    this.model = model;
    this.prisma = prisma;
  }

  public async delete(entity: T): Promise<T> {
    const record = await this.model.delete({
      where: { id: entity.id },
    });
    return record;
  }
  public getByID(id: string): Promise<T | null> {
    const record = this.model.findUnique({
      where: { id: id },
    })
    return record;
  }

  public async create(payload: T): Promise<T> {
    const record = await this.model.create({
      data: payload,
    });
    return record;
  }

  public async update(payload: T): Promise<T> {
    const record = await this.model.update({
      where: { id: payload.id },
      data: payload,
    });
    return record;
  }

  public async getById(id: string): Promise<T | null> {
    const record = await this.model.findUnique({
      where: { id: id },
    });
    return record;
  }
  public async get(
    pageSize: number = 100,
    pageNumber: number = 0
  ): Promise<T[]> {
    const records = await this.model.findMany({
      take: pageSize,
      skip: pageSize * pageNumber,
    });
    return records;
  }

  //TODO: Research implement the following methods
  // public async executeTransaction(
  //   operations: Promise<any>[]
  // ): Promise<unknown[]> {
  //   return this.prisma.$transaction(operations as any);
  // }

  // public async save(entity: T): Promise<T> {
  //   const operations = [];

  //   // Create operation
  //   operations.push(
  //     this.model.create({
  //       data: entity,
  //     })
  //   );

  //   // Update operation
  //   operations.push(
  //     this.model.update({
  //       where: { id: entity.id },
  //       data: entity,
  //     })
  //   );

  //   // Delete operation
  //   operations.push(
  //     this.model.delete({
  //       where: { id: entity.id },
  //     })
  //   );

  //   const [createdRecord, updatedRecord, deletedRecord] =
  //     await this.model.$transaction(operations);

  //   // Return the created, updated, or deleted record as needed
  //   return createdRecord;
  // }
}
