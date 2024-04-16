import { BaseModel } from "./base.model";

export interface UserModel extends BaseModel {
  username: string;
  profilePicture?: string;
  fullName?: string;
  email?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  phoneNumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
