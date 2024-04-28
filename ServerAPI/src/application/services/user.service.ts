
import { IUserRepository } from '../interfaces/persistence/user.repository';


class UserService {
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }


    //TODO: Profile Picture
    //TODO: Update Links
    //TODO: Update Profile
}