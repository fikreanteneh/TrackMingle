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
import { PrismaClient } from "@prisma/client";
import { inject, singleton } from "tsyringe";
let GenericRepository = class GenericRepository {
    constructor(model, prisma) {
        this.model = model;
        this.prisma = prisma;
    }
    async delete(entity) {
        const record = await this.model.delete({
            where: { id: entity.id },
        });
        return record;
    }
    getByID(id) {
        const record = this.model.findUnique({
            where: { id: id },
        });
        return record;
    }
    async create(payload) {
        const record = await this.model.create({
            data: payload,
        });
        return record;
    }
    async update(payload) {
        const record = await this.model.update({
            where: { id: payload.id },
            data: payload,
        });
        return record;
    }
    async getById(id) {
        const record = await this.model.findUnique({
            where: { id: id },
        });
        return record;
    }
    async get(pageSize = 100, pageNumber = 0) {
        const records = await this.model.findMany({
            take: pageSize,
            skip: pageSize * pageNumber,
        });
        return records;
    }
};
GenericRepository = __decorate([
    singleton(),
    __param(1, inject("PrismaClient")),
    __metadata("design:paramtypes", [Object, PrismaClient])
], GenericRepository);
export default GenericRepository;
//# sourceMappingURL=generic.repository.js.map