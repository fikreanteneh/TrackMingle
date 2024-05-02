import { FriendModel } from "../../../domain/models/friend.model";
import { FriendDetailDTO } from "../../dtos/friend.dto";
import { IGenericRepository } from "./generic.repository";

export interface IFriendRepository extends IGenericRepository<FriendModel> {
  getFriendsByID(
    id: string,
    pageSize: number,
    pageNumber: number
  ): Promise<FriendModel[]>;
  getFriendsByIDMinimal(id: string): Promise<FriendModel[]>;
}