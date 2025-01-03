import { BaseModel } from "./base.model";

export interface UserModel extends BaseModel {
  username: string;
  fullName: string;
  email: string;
  profilePicture?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  phoneNumber?: string;
  telegram?: String;
  website?: String;
  createdAt?: Date;
  updatedAt?: Date;
  Friends?: UserModel[];
  SentRequests?: UserModel[];
  ReceivedRequests?: UserModel[];
}
