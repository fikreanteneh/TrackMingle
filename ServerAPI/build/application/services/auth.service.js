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
var _a, _b;
import { inject, injectable, singleton } from "tsyringe";
import { IAuthenticationProvider } from "../interfaces/authentication/authentication.provider";
import { IUserRepository } from "../interfaces/persistence/user.repository";
let AuthService = class AuthService {
    constructor(authProvider, userRepository) {
        this.authProvider = authProvider;
        this.userRepository = userRepository;
    }
    async register(currUser, payload, params) {
        return await this.authProvider.register(payload);
    }
    async login(currUser, payload, param) {
        return await this.authProvider.signIn(payload);
    }
};
AuthService = __decorate([
    singleton(),
    injectable(),
    __param(0, inject("IAuthenticationProvider")),
    __param(1, inject("IUserRepository")),
    __metadata("design:paramtypes", [typeof (_a = typeof IAuthenticationProvider !== "undefined" && IAuthenticationProvider) === "function" ? _a : Object, typeof (_b = typeof IUserRepository !== "undefined" && IUserRepository) === "function" ? _b : Object])
], AuthService);
export default AuthService;
//# sourceMappingURL=auth.service.js.map