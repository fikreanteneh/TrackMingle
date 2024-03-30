import { User } from "./user.model";

export interface FriendRequest {
  id?: string;
  senderId: string;
  receiverId: string;
  createdAt?: Date;
  Sender?: User;
  Receiver?: User;
}


export interface FriendRequestBase {
  senderId: string;
  receiverId: string;
}