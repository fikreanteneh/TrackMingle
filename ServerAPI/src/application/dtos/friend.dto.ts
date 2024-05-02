import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";

export interface FriendDTO extends BaseDTO{
  userId: string;
  friendId: string;
  createdAt: Date;
}

export interface FriendDetailDTO extends FriendDTO {
  Friend : UserDTO 
}

export interface FriendListDTO {
  friends: FriendDetailDTO[];
}



export interface FriendMinimalDTO {
  friends: string[];
}