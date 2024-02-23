import { UsersService } from './users.service';
import User from './user.entity';
import { CreateUserDto } from './user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
