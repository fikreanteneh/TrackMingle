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
import { IFriendRepository } from "../interfaces/persistence/friend.repository";
import { IFriendRequestRepository } from "../interfaces/persistence/friend.request.repository";
let FriendRequestService = class FriendRequestService {
    constructor(friendRequestRepository, friendRepository) {
        this.friendRequestRepository = friendRequestRepository;
        this.FriendRepository = friendRepository;
    }
    async getFriendRequests(currUser, payload, params) {
        //TODO: Implement Filtering Response Data
        const data = await this.friendRequestRepository.getByReceiverID(currUser.id, params.pageSize ?? 20, params.pageNumber ?? 0);
        return data;
    }
    async getSentFriendRequests(currUser, payload, params) {
        //TODO: Implement Filtering Response Data
        return await this.friendRequestRepository.getBySenderID(currUser.id, params.pageSize, params.pageNumber);
    }
    async createFriendRequest(currUser, payload, params) {
        //TODO: Impemnt filtering
        await this.friendRequestRepository.create({
            senderId: currUser.id,
            receiverId: params.id,
        });
    }
    //TODO : add which was the sender and recieved
    async acceptFriendRequest(currUser, payload, params) {
        //TODO: Transaction
        const data = await this.friendRequestRepository.getByID(params.id);
        if (!data)
            throw new Error("Friend Request Not Found");
        await Promise.all([
            this.friendRequestRepository.delete(data),
            this.FriendRepository.create({
                userId: data.senderId,
                friendId: data.receiverId,
            }),
            this.FriendRepository.create({
                userId: data.receiverId,
                friendId: data.senderId,
            }),
        ]);
        return data;
    }
    async rejectFriendRequest(currUser, payload, params) {
        const data = await this.friendRequestRepository.getByID(params.id);
        if (!data)
            throw new Error("Friend Request Not Found");
        await this.friendRequestRepository.delete(data);
    }
};
FriendRequestService = __decorate([
    singleton(),
    __metadata("design:paramtypes", [typeof (_a = typeof IFriendRequestRepository !== "undefined" && IFriendRequestRepository) === "function" ? _a : Object, typeof (_b = typeof IFriendRepository !== "undefined" && IFriendRepository) === "function" ? _b : Object])
], FriendRequestService);
export { FriendRequestService };
//# sourceMappingURL=friend.request.service.js.map