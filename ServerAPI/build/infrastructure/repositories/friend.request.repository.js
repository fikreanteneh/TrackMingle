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
import { PrismaClient } from "@prisma/client/extension";
import GenericRepository from "./generic.repository";
import { inject, singleton } from "tsyringe";
let FriendRequestRepository = class FriendRequestRepository extends GenericRepository {
    constructor(prisma) {
        super(prisma.FriendRequest, prisma);
        this.prisma = prisma;
    }
    async getBySenderID(id, pageSize = 100, pageNumber = 0) {
        const x = this.prisma;
        const y = this.model;
        const records = await this.model.findMany({
            where: {
                senderId: id,
            },
            skip: pageNumber * pageSize,
            take: pageSize,
            include: {
                Receiver: true,
            },
        });
        return records;
    }
    async getByReceiverID(id, pageSize = 100, pageNumber = 0) {
        const records = await this.model.findMany({
            where: {
                receiverId: id,
            },
            skip: pageNumber * pageSize,
            take: pageSize,
            include: {
                Sender: true,
            },
        });
        return records;
    }
};
FriendRequestRepository = __decorate([
    singleton(),
    __param(0, inject("PrismaClient")),
    __metadata("design:paramtypes", [Object])
], FriendRequestRepository);
export default FriendRequestRepository;
//# sourceMappingURL=friend.request.repository.js.map