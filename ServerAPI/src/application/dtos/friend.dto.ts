import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";


export interface FriendBaseDTO {
  userId: string;
  friendId: string;
}

export interface FriendDTO extends BaseDTO, FriendBaseDTO{
  createdAt: Date;
}

export interface FriendDetailDTO extends FriendDTO {
  Friend : UserDTO 
}
