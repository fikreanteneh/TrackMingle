import { BaseDTO } from "./base.dto";
import { FriendRequestDTO } from "./friend.request.dto";

export interface UserDTO extends BaseDTO {
  username: string;
  fullName?: string;
  profilePicture?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  email?: string;
  phoneNumber?: string;
  createdAt: Date;
}

export interface UserPersonalDTO extends UserDTO {
  SentRequests?: FriendRequestDTO[];
  ReceivedRequests?: FriendRequestDTO[];
  Friends?: UserDTO[];
  updatedAt: Date;
}
