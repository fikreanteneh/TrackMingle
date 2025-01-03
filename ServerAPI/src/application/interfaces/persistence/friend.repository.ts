import { FriendModel } from "../../../domain/models/friend.model";
import { IGenericRepository } from "./generic.repository";

export interface IFriendRepository extends IGenericRepository<FriendModel> {
  getFriendsByID(
    id: string,
    pageSize: number,
    pageNumber: number
  ): Promise<FriendModel[]>;
  getFriendsByIDMinimal(id: string, pageSize: number,
    pageNumber: number): Promise<FriendModel[]>;
}