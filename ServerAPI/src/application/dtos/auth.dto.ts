import { User } from "./user.dto";


export interface AuthDetailDTO {
  id: string;
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
