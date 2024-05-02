import { FriendListDTO, FriendMinimalDTO } from "../dtos/friend.dto";
import { IDParam, PageParam } from "../dtos/request.dto";
import { IFriendRepository } from "../interfaces/persistence/friend.repository";
import { AuthDetailDTO } from './../dtos/auth.dto';



export default class FriendService {
    private friendRepository : IFriendRepository
    constructor(friendRepository: IFriendRepository) {
        this.friendRepository = friendRepository 
    }
    async getAllMyFriendsMinimal(currUser: AuthDetailDTO, payload: IDParam): Promise<FriendMinimalDTO> {
        const data = await this.friendRepository.getFriendsByIDMinimal(payload.id)
        return {friends: [...data.map(friend => friend.friendId)]}
    }
    // async getAllMyFriends(currUser: AuthDetailDTO, payload: IDParam & PageParam): Promise<FriendListDTO> {
    //     return { friends: (await this.friendRepository.getFriendsByID(payload.id, payload.pageSize, payload.pageNumber)) as FriendListDTO }
    // }

}