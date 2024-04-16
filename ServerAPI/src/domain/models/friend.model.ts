import { BaseModel } from "./base.model";
import { UserModel } from "./user.model";

export interface FriendModel extends BaseModel {
  userId: string;
  friendId: string;
  createdAt?: Date;
  User?: UserModel;
  Friend? : UserModel;
}