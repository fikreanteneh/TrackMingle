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
  telegram?: String;
  website?: String;
  phoneNumber?: string;
  createdAt: Date;
}

export interface UserPersonalDTO extends UserDTO {
  SentRequests?: FriendRequestDTO[];
  ReceivedRequests?: FriendRequestDTO[];
  Friends?: UserDTO[];
  updatedAt: Date;
}

export interface UserCreateDTO {
  username: string;
  fullName: string;
}

export interface UpdateUsernameDTO {
  username: string;
}

export interface UpdateFullNameDTO {
  fullName: string;
}

export interface UpdateProfilePictureDTO {
  profilePicture: File;
}

export interface UpdateLinksDTO {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  telegram?: String;
  website?: String;
}
