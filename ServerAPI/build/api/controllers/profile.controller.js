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
var _a, _b, _c, _d;
import { Body, Get, Post, Put, Request, Route, Security, SuccessResponse, Tags, } from "tsoa";
import { UpdateFullNameDTO, UpdateLinksDTO, UpdateUsernameDTO, UserCreateDTO, } from "../../application/dtos/user.dto";
import ProfileService from "../../application/services/profile.service";
import { prisma } from "../../config/prisma";
import supabase from "../../config/supabase";
import AuthenticationProvider from "../../infrastructure/authentication/authentication.provider";
import UserRepository from "../../infrastructure/repositories/user.repository";
let ProfileController = class ProfileController {
    async getProfile(request) {
        const service = new ProfileService(new UserRepository(prisma()), new AuthenticationProvider(supabase()));
        return await service.GetProfile(request.user, null, null);
    }
    async createProfile(request, payload) {
        const service = new ProfileService(new UserRepository(prisma()), new AuthenticationProvider(supabase()));
        return await service.CreateProfile(request.user, payload, null);
    }
    async updateLinks(request, payload) {
        const service = new ProfileService(new UserRepository(prisma()), new AuthenticationProvider(supabase()));
        return await service.UpdateLinks(request.user, payload, null);
    }
    async updateUsername(request, payload) {
        const service = new ProfileService(new UserRepository(prisma()), new AuthenticationProvider(supabase()));
        return await service.UpdateUsername(request.user, payload, null);
    }
    async updateFullName(request, payload) {
        const service = new ProfileService(new UserRepository(prisma()), new AuthenticationProvider(supabase()));
        return await service.UpdateFullName(request.user, payload, null);
    }
};
__decorate([
    Get(""),
    SuccessResponse("200"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfile", null);
__decorate([
    Post(""),
    SuccessResponse("201"),
    __param(0, Request()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof UserCreateDTO !== "undefined" && UserCreateDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createProfile", null);
__decorate([
    Put("updateLinks"),
    SuccessResponse("200"),
    __param(0, Request()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof UpdateLinksDTO !== "undefined" && UpdateLinksDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateLinks", null);
__decorate([
    Put("updateUsername"),
    SuccessResponse("200"),
    __param(0, Request()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof UpdateUsernameDTO !== "undefined" && UpdateUsernameDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateUsername", null);
__decorate([
    Post("updateFullName"),
    Security("BearerAuth"),
    SuccessResponse("200"),
    __param(0, Request()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof UpdateFullNameDTO !== "undefined" && UpdateFullNameDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateFullName", null);
ProfileController = __decorate([
    Tags("Profile"),
    Route("profile"),
    Security("BearerAuth")
], ProfileController);
export { ProfileController };
//# sourceMappingURL=profile.controller.js.map