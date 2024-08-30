import { BaseDTO } from "./base.dto";
import { IDParam, PageParam } from "./request.dto";
import { UserDTO } from "./user.dto";

export interface FriendRequestDTO extends BaseDTO {
  senderId: string;
  receiverId: string;
  createdAt: Date;
}
export interface FriendRequestDetailDTO extends FriendRequestDTO {
  Sender?: UserDTO;
  Receiver?: UserDTO;
}

export interface FriendRequestCreateDTO {
  receiverId: string;
}

export interface FriendRequestGetParam extends IDParam, PageParam {}
