import { IsString, IsEmail, IsIn, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoleTypes } from '../../utils/user-roles.enum';

export class RegisterUserDto {
    @ApiProperty()
    @IsString()
    fullName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsEmail()
    phone: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsEnum(RoleTypes)
    role: RoleTypes;
}