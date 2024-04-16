import { BaseModel } from "../../../domain/models/base.model";

export interface IGenericRepository<BaseModel> {
  create(entity: BaseModel): Promise<BaseModel>;
  update(entity: BaseModel): Promise<BaseModel>;
  delete(entity: BaseModel): Promise<BaseModel>;
  get(pageNumber: number, pageSize: number): Promise<BaseModel[]>;
  getByID(id: string): Promise<BaseModel | null>;
}
