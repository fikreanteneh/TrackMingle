import SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import { IAuthenticationProvider } from "../../application/interfaces/authentication/authentication.provider";

export default class AuthenticationProvider implements IAuthenticationProvider {
    private readonly supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) { 
        this.supabase = supabase;
    }
    async login(currUser: any, dtos: any, param: any): Promise<string> {
         const { data, error } = await this.supabase.auth.admin.createUser({
           email: dtos.email,
           password: dtos.password,
           user_metadata: { role: "User" },
         });
        if (error) throw error;
        return {
            us: data.user.
        }
    }
    async register(currUser: any, dtos: any, param: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async verify(currUser: any, dtos: any, param: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}