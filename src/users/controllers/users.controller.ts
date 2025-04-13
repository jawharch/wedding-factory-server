import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { RolesGuard } from '../../auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../auth/roles.decorator';
import { RoleTypes } from '../../utils/user-roles.enum';

@ApiBearerAuth('JWT-auth')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get all users
  @Get()
  @ApiCreatedResponse({ type: [User] })
  async findAll() {
    return this.usersService.findAll();
  }

  // Get a user by ID
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleTypes.ADMIN)
  @Get(':id')
  @ApiCreatedResponse({ type: User })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  // Update a user
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleTypes.ADMIN)
  @Patch(':id')
  @ApiCreatedResponse({ type: User })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // Delete a user
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleTypes.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}