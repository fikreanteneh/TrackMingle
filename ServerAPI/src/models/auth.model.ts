import { User } from "./user.model";

export enum EnumRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface Auth {
  id?: string;
  createdAt?: Date;
  email: string;
  password: string;
  oauth: boolean;
  phoneNumber?: string;
  role: EnumRole;
  User?: User;
}


export interface AuthBase { 
    email: string;
    password: string;
    oauth: boolean;
    role: EnumRole;
    username: string;
}


export interface AuthLogin {
    email: string;
    password: string;
}


export interface AuthLoginSuccess { 
    token: string;
}
