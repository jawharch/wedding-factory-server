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
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsNotEmpty()
    @IsString()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsOptional()
    @IsString()
    phoneNumber: string;
  
    @IsOptional()
    @IsString()
    profilePicture: string;
  
   
    @IsNotEmpty()
    @IsEnum(Role)
    role: Role;

    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsString()
    businessName: string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsString()
    address: string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsString()
    city: string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsString()
    description:string;
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsArray()
    
    socialMediaLinks: string[];
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsArray()
   
    workingHours: string[];

    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    services: string[];
  
    @ValidateIf((dto) => dto.role === Role.SERVICE_PROVIDER)
    @IsNotEmpty()
    @IsEnum(Category)
    category: Category;
}
