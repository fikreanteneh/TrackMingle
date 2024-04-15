import { Auth } from "./auth.dto";
import { Friend } from "./friend.dto";
import { FriendRequest } from "./friend.request.dto";

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
