import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {


  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Register a new user
  async register(registerDto: RegisterUserDto) {
    const { email, password } = registerDto;

    // Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    return this.generateJwtToken(newUser);
  }

  // Login and generate JWT token
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Compare the password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return this.generateJwtToken(user);
  }

  // Generate JWT token for a user
  generateJwtToken(user: any) {
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Validate JWT token (for route protection)
  async validateUser(payload: any) {
    const user = await this.usersService.findOne(payload.id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
