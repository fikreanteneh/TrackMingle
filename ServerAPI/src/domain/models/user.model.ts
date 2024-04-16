import { BaseModel } from "./base.model";

export interface UserModel extends BaseModel {
  profilePicture?: string;
  username?: string;
  fullName?: string;
  email?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  phoneNumber?: string;
}
