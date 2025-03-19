import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Create a new user
  @Post()
  @ApiCreatedResponse({ type: User })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // Get all users
  @Get()
  @ApiCreatedResponse({ type: [User] })
  async findAll() {
    return this.usersService.findAll();
  }

  // Get a user by ID
  @Get(':id')
  @ApiCreatedResponse({ type: User })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  // Update a user
  @Patch(':id')
  @ApiCreatedResponse({ type: User })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // Delete a user
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}