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
import { IFriendRepository } from "../interfaces/persistence/friend.repository";
let FriendService = class FriendService {
    constructor(friendRepository) {
        this.friendRepository = friendRepository;
    }
    async getAllMyFriendsMinimal(currUser, payload) {
        const data = await this.friendRepository.getFriendsByIDMinimal(payload.id);
        return { friends: [...data.map((friend) => friend.friendId)] };
    }
};
FriendService = __decorate([
    singleton(),
    __metadata("design:paramtypes", [typeof (_a = typeof IFriendRepository !== "undefined" && IFriendRepository) === "function" ? _a : Object])
], FriendService);
export default FriendService;
//# sourceMappingURL=friend.service.js.map