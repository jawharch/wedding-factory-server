import {
    IsNotEmpty,
    IsString,
    IsEnum,
    IsOptional,
    ValidateIf,
    IsArray,
    ArrayNotEmpty,
  } from 'class-validator';
import { Category } from 'src/utils/category.enum';
import { Role } from 'src/utils/user-roles.enum';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'firstName', required: true})
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'lastName', required: true})
    lastName: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'email', required: true})
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'password', required: true})
    password: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty({type: 'string', description: 'phoneNumber', required: true})
    phoneNumber: string;
  
    @IsOptional()
    @IsString()
    @ApiProperty({type: 'string', description: 'profilePicture', required: true})
    profilePicture: string;
  
   
    @IsNotEmpty()
    @IsEnum(Role)
    @ApiProperty({enum: Role, description: 'role', required: true})
    role: Role;

    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'businessName', required: true})
    businessName: string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'address', required: true})
    address: string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: 'string', description: 'city', required: true})
    city: string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsString()
    @ApiProperty({type: 'string', description: 'description', required: true})
    description:string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsArray()
    @ApiProperty({type: 'array', description: 'socialMediaLinks', required: true})
    socialMediaLinks: string[];
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsArray()
    @ApiProperty({type: 'array', description: 'workingHours', required: true})
    workingHours: string[];

    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @ApiProperty({type: 'array', description: 'services', required: true})
    services: string[];
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsEnum(Category)
    @ApiProperty({enum: Category, description: 'category', required: true})
    category: Category;
}
