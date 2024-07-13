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
import { Get, Path, Post, Put, Request, Route, Security, Tags } from "tsoa";
import { FriendRequestService } from "../../application/services/friend.request.service";
import { prisma } from "../../config/prisma";
import FriendRepository from "../../infrastructure/repositories/friend.repository";
import FriendRequestRepository from "../../infrastructure/repositories/friend.request.repository";
import { responseHandler, } from "../middlewares/response.middleware";
let FriendRequestController = class FriendRequestController {
    async createFriendRequest(request, id) {
        const service = new FriendRequestService(new FriendRequestRepository(prisma()), new FriendRepository(prisma()));
        const response = await service.createFriendRequest(request.user, null, {
            id: id,
        });
        return responseHandler(response);
    }
    async acceptFriendRequest(request, id) {
        const service = new FriendRequestService(new FriendRequestRepository(prisma()), new FriendRepository(prisma()));
        const response = await service.acceptFriendRequest(request.user, null, { id: id });
        return responseHandler(response);
    }
    async getSentFriendRequests(request) {
        const service = new FriendRequestService(new FriendRequestRepository(prisma()), new FriendRepository(prisma()));
        return service.getSentFriendRequests(request.user, null, {
            pageSize: 100,
            pageNumber: 0,
        });
    }
    async getFriendRequests(request) {
        const service = new FriendRequestService(new FriendRequestRepository(prisma()), new FriendRepository(prisma()));
        const response = await service.getFriendRequests(request.user, null, {
            pageSize: 100,
            pageNumber: 0,
        });
        return responseHandler(response);
    }
};
__decorate([
    Post("{id}"),
    __param(0, Request()),
    __param(1, Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "createFriendRequest", null);
__decorate([
    Put("{id}"),
    __param(0, Request()),
    __param(1, Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "acceptFriendRequest", null);
__decorate([
    Get("sent"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "getSentFriendRequests", null);
__decorate([
    Get("received"),
    __param(0, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "getFriendRequests", null);
FriendRequestController = __decorate([
    Tags("Friend Request"),
    Route("friendRequest"),
    Security("BearerAuth")
], FriendRequestController);
export { FriendRequestController };
//# sourceMappingURL=friend.request.controller.js.map