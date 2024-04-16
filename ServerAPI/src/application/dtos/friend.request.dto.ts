
import { BaseDTO } from './base.dto';
import { UserDTO } from './user.dto';


export interface FriendRequestDTO extends BaseDTO {
  senderId: string;
  receiverId: string;
  createdAt: Date;
}
export interface FriendRequestDetailDTO extends FriendRequestDTO {
  Sender: UserDTO;
}





export interface FriendRequestParam {
  userId: string;
}