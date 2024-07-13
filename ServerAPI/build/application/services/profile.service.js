var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
import { singleton } from "tsyringe";
import { IAuthenticationProvider } from "../interfaces/authentication/authentication.provider";
import { IUserRepository } from "../interfaces/persistence/user.repository";
//TODO: Search Service
let ProfileService = class ProfileService {
    constructor(userRepository, authProvider) {
        this.userRepository = userRepository;
        this.authProvider = authProvider;
    }
    async GetProfile(currUser, payload, params) {
        const userDetail = await this.userRepository.getByID(currUser.id);
        if (!userDetail) {
            throw new Error("User not found");
        }
        return userDetail;
    }
    async CreateProfile(currUser, payload, params) {
        const userDetail = (await this.userRepository.create({
            ...payload,
            id: currUser.id,
            email: currUser.email,
        }));
        await this.authProvider.updateMetadata(currUser.id, {
            userId: userDetail.id,
            fullName: payload.fullName,
            username: payload.username,
            profilePicture: null,
        });
        return userDetail;
    }
    async UpdateLinks(currUser, payload, params) {
        const userDetail = await this.userRepository.getByID(currUser.id);
        if (!userDetail) {
            throw new Error("User not found");
        }
        return (await this.userRepository.update({
            ...userDetail,
            ...payload,
        }));
    }
    async UpdateUsername(currUser, payload, params) {
        const userDetail = await this.userRepository.getByID(currUser.id);
        if (!userDetail) {
            throw new Error("User not found");
        }
        //TODO: Check if username is unique
        userDetail.username = payload.username;
        currUser.metadata.username = payload.username;
        await Promise.all([
            this.userRepository.update(userDetail),
            this.authProvider.updateMetadata(currUser.id, currUser.metadata),
        ]);
        return userDetail;
    }
    async UpdateFullName(currUser, payload, params) {
        const userDetail = await this.userRepository.getByID(currUser.id);
        if (!userDetail) {
            throw new Error("User not found");
        }
        //TODO: Check if username is unique
        userDetail.fullName = payload.fullName;
        currUser.metadata.fullName = payload.fullName;
        await Promise.all([
            this.userRepository.update(userDetail),
            this.authProvider.updateMetadata(currUser.id, currUser.metadata),
        ]);
        return userDetail;
    }
};
ProfileService = __decorate([
    singleton(),
    __metadata("design:paramtypes", [typeof (_a = typeof IUserRepository !== "undefined" && IUserRepository) === "function" ? _a : Object, typeof (_b = typeof IAuthenticationProvider !== "undefined" && IAuthenticationProvider) === "function" ? _b : Object])
], ProfileService);
export default ProfileService;
//# sourceMappingURL=profile.service.js.map