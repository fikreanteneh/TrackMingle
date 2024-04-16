import { BaseDTO } from './base.dto';
export interface AuthDetailDTO extends BaseDTO {
  email: string | undefined;
  phone: string | undefined;
  role: string | undefined;
  createdAt: string;
  updatedAt: string | undefined;
}

export interface AuthRegisterDTO {
  email: string;
  password: string;
  username: string;
  fullName: string;
}
export interface AuthLoginDTO {
  email: string;
  password: string;
}

export interface AuthTokenDTO {
  token: string;
}
