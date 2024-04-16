import { BaseModel } from "./base.model";
import { UserModel } from "./user.model";

export interface FriendRequestModel extends BaseModel {
  senderId: string;
  receiverId: string;
  createdAt?: Date;
  Sender?: UserModel;
  Receiver?: UserModel;
}
