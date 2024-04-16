import { FriendRequestModel } from "../../../domain/models/friend.request.model";
import { FriendRequestDetailDTO } from "../../dtos/friend.request.dto";
import { IGenericRepository } from "./generic.repository";

export interface IFriendRequestRepository extends IGenericRepository<FriendRequestModel> { 
    getBySenderID(id: string): Promise<FriendRequestDetailDTO>;
    getByReceiverID(id: string): Promise<FriendRequestDetailDTO>;
}