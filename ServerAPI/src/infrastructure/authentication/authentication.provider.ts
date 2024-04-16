import SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import {
  AuthDetailDTO,
  AuthLoginDTO,
  AuthRegisterDTO,
  AuthTokenDTO,
} from "../../application/dtos/auth.dto";
import { IAuthenticationProvider } from "../../application/interfaces/authentication/authentication.provider";

export default class AuthenticationProvider implements IAuthenticationProvider {
  private readonly supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }
  async signin(
    currUser: null,
    dtos: AuthLoginDTO,
    param: null
  ): Promise<AuthTokenDTO> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: dtos.email,
      password: dtos.password,
    });
    if (error) throw error;
    return { token: data.session.access_token };
  }

  async register(
    currUser: null,
    dtos: AuthRegisterDTO,
    param: null
  ): Promise<AuthDetailDTO> {
    const { data, error } = await this.supabase.auth.admin.createUser({
      email: dtos.email,
      password: dtos.password,
      // role: "User",
    });
    if (error) throw error;
    return {
      id: data.user.id,
      email: data.user.email,
      phone: data.user.phone,
      role: data.user.role,
      createdAt: data.user.created_at,
      updatedAt: data.user.updated_at,
    };
  }
  async verify(
    currUser: null,
    dtos: AuthTokenDTO,
    param: null
  ): Promise<AuthDetailDTO> {
    const { data, error } = await this.supabase.auth.getUser(
      dtos.token
    );
    if (error) throw new Error("Unauthorized")
    return {
      id: data.user.id,
      email: data.user.email,
      phone: data.user.phone,
      role: data.user.role,
      createdAt: data.user.created_at,
      updatedAt: data.user.updated_at,
    };
  }
}
