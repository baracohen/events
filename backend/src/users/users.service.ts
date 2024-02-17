import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    const users = this.usersRepository.find();
    return users;
  }

  async getUserById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException('could not find user');
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    await this.usersRepository.save({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    });
    return newUser;
  }

  async deleteUserById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      return null;
    }

    await this.usersRepository.remove(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    return user;
  }
}
