import { User } from "./user.dto";

export interface Friend {
  id?: string;
  userId: string;
  friendId: string;
  createdAt?: Date;
  User?: User;
  Friend?: User;
}

export interface FriendBase {
  userId: string;
  friendId: string;
}
