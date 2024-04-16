import { FriendModel } from "../../../domain/models/friend.model";
import { FriendDetailDTO } from "../../dtos/friend.dto";
import { IGenericRepository } from "./generic.repository";

export interface FriendRepository extends IGenericRepository<FriendModel> {
  getFriendsByID(id: string): Promise<FriendDetailDTO[]>;
}
