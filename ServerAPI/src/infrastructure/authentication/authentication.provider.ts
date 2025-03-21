import { SupabaseClient } from "@supabase/supabase-js";
import { inject, singleton } from "tsyringe";
import {
  AuthDetailDTO,
  AuthDTO,
  AuthTokenDTO,
  UserMetadataCustom,
} from "../../application/dtos/auth.dto";
import { IAuthenticationProvider } from "../../application/interfaces/authentication/authentication.provider";

//TODO: iMPLEMENT Error Handling
@singleton()
export default class AuthenticationProvider implements IAuthenticationProvider {
  private readonly supabase: SupabaseClient;

  constructor(@inject("SupabaseClient") supabase: SupabaseClient) {
    this.supabase = supabase;
  }
  async signIn(payload: AuthDTO): Promise<AuthTokenDTO> {
    //TODO: Handle only Phone Login
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: payload.email ?? "",
      password: payload.password,
      phone: payload.phone,
    });
    if (error) throw error;
    return { token: data.session.access_token };
  }

  async register(payload: AuthDTO): Promise<AuthDetailDTO> {
    const { data, error } = await this.supabase.auth.admin.createUser({
      email: payload.email,
      password: payload.password,
      email_confirm: true,
    });
    if (error) throw error;
    const authDetail: AuthDetailDTO = {
      id: data.user.id,
      email: data.user.email ?? "",
      role: data.user.role ?? "",
      verified: data.user.email_confirmed_at ? true : false,
      metadata: {
        userId: data.user.user_metadata["userId"] ?? "",
        username: data.user.user_metadata["username"] ?? "",
        fullName: data.user.user_metadata["fullName"] ?? "",
        profilePicture: data.user.user_metadata["profilePicture"] ?? "",
      },
    };
    return authDetail;
  }

  async verify(payload: AuthTokenDTO): Promise<AuthDetailDTO> {
    const { data, error } = await this.supabase.auth.getUser(payload.token);
    if (error) throw new Error("Unauthorized");
    return {
      id: data.user.id,
      email: data.user.email as string,
      role: data.user.role as string,
      verified: data.user.email_confirmed_at ? true : false,
      metadata: {
        userId: data.user.user_metadata["userId"],
        username: data.user.user_metadata["username"],
        fullName: data.user.user_metadata["fullName"],
        profilePicture: data.user.user_metadata["profilePicture"],
      },
    };
  }

  async updateMetadata(
    authId: string,
    payload: UserMetadataCustom
  ): Promise<null> {
    const { data, error } = await this.supabase.auth.admin.updateUserById(
      authId,
      {
        user_metadata: payload,
      }
    );
    if (error) throw error;
    return null;
  }
}
