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
let FriendRepository = class FriendRepository extends GenericRepository {
    constructor(prisma) {
        super(prisma.Friend, prisma);
        this.prisma = prisma;
    }
    async getFriendsByIDMinimal(id) {
        const record = await this.model.findMany({
            where: { userId: id },
            select: { friendId: true },
        });
        return record;
    }
    async getFriendsByID(id, pageSize = 100, pageNumber = 0) {
        const records = await this.model.findMany({
            where: {
                userId: id,
            },
            skip: pageNumber * pageSize,
            take: pageSize,
            include: {
                Friend: true,
            },
        });
        return records;
    }
};
FriendRepository = __decorate([
    singleton(),
    __param(0, inject("PrismaClient")),
    __metadata("design:paramtypes", [Object])
], FriendRepository);
export default FriendRepository;
//# sourceMappingURL=friend.repository.js.map