import User from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUserById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
}
