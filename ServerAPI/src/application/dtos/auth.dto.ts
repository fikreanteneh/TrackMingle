import { BaseDTO } from "./base.dto";

export interface UserMetadataCustom {
  username: string | null;
  fullName: string | null;
  userId: string | null;
  profilePicture: string | null;
}

export interface AuthDetailDTO extends BaseDTO {
  email: string;
  role: string;
  verified: boolean;
  metadata: UserMetadataCustom;
}

export interface AuthDTO {
  email?: string;
  phone?: string;
  password: string;
}

export interface AuthTokenDTO {
  token: string;
}
