import { Auth } from "./auth.model";
import { Friend } from "./friend.model";
import { FriendRequest } from "./friend.request.model";

export interface User {
  id?: string;
  username: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  auth?: Auth;
  SentRequests?: FriendRequest[];
  ReceivedRequests?: FriendRequest[];
  User?: Friend[];
  Friends?: Friend[];
}

export interface UserBase {
  id: string;
  username: string;
}