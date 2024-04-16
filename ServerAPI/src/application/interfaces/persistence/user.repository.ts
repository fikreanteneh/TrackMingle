import { UserDTO } from '../../dtos/user.dto';
import { UserModel } from './../../../domain/models/user.model';
import { IGenericRepository } from './generic.repository';
export interface IUserRepository extends IGenericRepository<UserModel>{
    getByUsername(username: string): Promise<UserModel>;
    getByEmail(email: string): Promise<UserModel>;
    getByPhoneNumber(phoneNumber: string): Promise<UserModel>;
    search(query: string, pageNumber: number, pageSize:number): Promise<UserModel[]>;
}
