import { UserDTO } from '../../dtos/user.dto';
import { UserModel } from './../../../domain/models/user.model';
import { IGenericRepository } from './generic.repository';
export interface IUserRepository extends IGenericRepository<UserModel>{
    getByUsername(username: string): Promise<UserDTO>;
    getByEmail(email: string): Promise<UserDTO>;
    getByPhoneNumber(phoneNumber: string): Promise<UserDTO>;
    search(query: string, pageNumber: number, pageSize:number): Promise<UserDTO[]>;
}
