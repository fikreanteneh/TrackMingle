
import { BaseDTO } from './base.dto';
import { UserDTO } from './user.dto';


export interface FriendRequestBaseDTO {
  senderId: string;
  receiverId: string;
}

export interface FriendRequestDTO extends BaseDTO, FriendRequestBaseDTO{
  createdAt: Date;
}

export interface FriendRequestDetailDTO extends FriendRequestDTO {
  Sender: UserDTO;
}

