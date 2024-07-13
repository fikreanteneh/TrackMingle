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
import { Get, Path, Request, Route, SuccessResponse, Tags } from "tsoa";
import FriendService from "../../application/services/friend.service";
import { prisma } from "../../config/prisma";
import FriendRepository from "../../infrastructure/repositories/friend.repository";
import { responseHandler, } from "../middlewares/response.middleware";
let FriendController = class FriendController {
    async register(request, id) {
        const service = new FriendService(new FriendRepository(prisma()));
        const response = await service.getAllMyFriendsMinimal(request.user, { id: id });
        return responseHandler(response);
    }
};
__decorate([
    Get(""),
    SuccessResponse("200"),
    __param(0, Request()),
    __param(1, Path("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FriendController.prototype, "register", null);
FriendController = __decorate([
    Tags("Friends"),
    Route("{id}/friends")
], FriendController);
export { FriendController };
//# sourceMappingURL=friend.controller.js.map