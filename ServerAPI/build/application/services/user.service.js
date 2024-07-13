var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { singleton } from "tsyringe";
import { IUserRepository } from "../interfaces/persistence/user.repository";
//TODO: Search Service
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async GetUserByID(currUser, payload, params) {
        return (await this.userRepository.getByID(payload.id));
    }
    async GetUsers(currUser, payload, params) {
        return (await this.userRepository.get(params.pageNumber, params.pageSize));
    }
};
UserService = __decorate([
    singleton(),
    __metadata("design:paramtypes", [typeof (_a = typeof IUserRepository !== "undefined" && IUserRepository) === "function" ? _a : Object])
], UserService);
export default UserService;
//# sourceMappingURL=user.service.js.map