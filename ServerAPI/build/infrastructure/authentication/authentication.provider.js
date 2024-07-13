var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
import SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import { inject, singleton } from "tsyringe";
//TODO: iMPLEMENT Error Handling
let AuthenticationProvider = class AuthenticationProvider {
    constructor(supabase) {
        this.supabase = supabase;
    }
    async signIn(payload) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: payload.email,
            password: payload.password,
        });
        if (error)
            throw error;
        return { token: data.session.access_token };
    }
    async register(payload) {
        const { data, error } = await this.supabase.auth.admin.createUser({
            email: payload.email,
            password: payload.password,
            email_confirm: true,
        });
        if (error)
            throw error;
        return this.signIn(payload);
    }
    async verify(payload) {
        const { data, error } = await this.supabase.auth.getUser(payload.token);
        let x = data.user?.user_metadata;
        if (error)
            throw new Error("Unauthorized");
        return {
            id: data.user.id,
            email: data.user.email,
            role: data.user.role,
            verified: data.user.email_confirmed_at ? true : false,
            metadata: {
                userId: data.user.user_metadata["userId"],
                username: data.user.user_metadata["username"],
                fullName: data.user.user_metadata["fullName"],
                profilePicture: data.user.user_metadata["profilePicture"],
            },
        };
    }
    async updateMetadata(authId, payload) {
        const { data, error } = await this.supabase.auth.admin.updateUserById(authId, {
            user_metadata: payload,
        });
        if (error)
            throw error;
        return null;
    }
};
AuthenticationProvider = __decorate([
    singleton(),
    __param(0, inject("SupabaseClient")),
    __metadata("design:paramtypes", [typeof (_a = typeof SupabaseClient !== "undefined" && SupabaseClient) === "function" ? _a : Object])
], AuthenticationProvider);
export default AuthenticationProvider;
//# sourceMappingURL=authentication.provider.js.map