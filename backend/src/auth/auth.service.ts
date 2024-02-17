import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/users.service';
import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    const { name, email, password } = createUserDto;

    // Check if a user with the provided email already exists
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash the password before saving it
    console.log('password', password);
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    await this.userService.createUser({
      name,
      email,
      password: hashedPassword,
    });
    // Generate and return JWT token
    const payload = { email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
