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
import { inject, singleton } from "tsyringe";
import GenericRepository from "./generic.repository";
let UserRepository = class UserRepository extends GenericRepository {
    constructor(prisma) {
        super(prisma.User, prisma);
        this.prisma = prisma;
    }
    async getByUsername(username) {
        const record = await this.model.findUnique({
            where: { username: username },
        });
        return record;
    }
    async getByEmail(email) {
        const record = await this.model.findUnique({
            where: { email: email },
        });
        return record;
    }
    async getByPhoneNumber(phoneNumber) {
        const record = await this.model.findUnique({
            where: { phoneNumber: phoneNumber },
        });
        return record;
    }
    async search(query, pageNumber, pageSize) {
        //TODO: Implement completed search method
        const records = await this.model.findMany({
            where: {
                OR: [
                    { username: { contains: query } },
                    { email: { contains: query } },
                    { phoneNumber: { contains: query } },
                ],
            },
            take: pageSize,
            skip: pageSize * pageNumber,
        });
        return records;
    }
    async getByID(id) {
        const record = await this.model.findUnique({
            where: { id: id },
        });
        return record;
    }
};
UserRepository = __decorate([
    singleton(),
    __param(0, inject("PrismaClient")),
    __metadata("design:paramtypes", [Object])
], UserRepository);
export default UserRepository;
//# sourceMappingURL=user.repository.js.map