import SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import { IAuthenticationProvider } from "../../application/interfaces/authentication/authentication.provider";
import { AuthDetailDTO, AuthTokenDTO } from "../../application/dtos/auth.dto";

export default class AuthenticationProvider implements IAuthenticationProvider {
    private readonly supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) { 
        this.supabase = supabase;
    }
    async login(currUser: any, dtos: any, param: any): Promise<AuthTokenDTO> {
        
    }
    async register(currUser: any, dtos: any, param: any): Promise<AuthDetailDTO> {
        const { data, error } = await this.supabase.auth.admin.createUser({
          email: dtos.email,
          password: dtos.password,
          role: "User",
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
    async verify(currUser: any, dtos: any, param: any): Promise<AuthDetailDTO> {
         
    }
}