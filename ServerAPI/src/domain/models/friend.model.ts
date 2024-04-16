import { BaseModel } from "./base.model";

export interface FriendModel extends BaseModel {
  userId: string;
  friendId: string;
  createdAt?: Date;
}