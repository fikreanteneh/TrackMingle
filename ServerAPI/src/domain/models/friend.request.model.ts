import { BaseModel } from "./base.model";

export interface FriendRequestModel extends BaseModel {
  senderId: string;
  receiverId: string;
  createdAt?: Date;
}
