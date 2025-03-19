import { IsString, IsArray, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceProviderDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  region: string;

  @ApiProperty()
  @IsString()
  type: string; // e.g., 'photographer', 'catering', 'weddingVenue'

  @ApiProperty()
  @IsString()
  @IsOptional()
  cameraType?: string; // For photographers

  @ApiProperty()
  @IsString()
  @IsOptional()
  portfolioLink?: string; // For photographers

  @ApiProperty()
  @IsString()
  @IsOptional()
  cuisineType?: string; // For catering

  @ApiProperty()
  @IsArray()
  @IsOptional()
  menu?: string[]; // For catering

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  capacity?: number; // For wedding venues

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string; // For wedding venues

  @ApiProperty()
  @IsArray()
  @IsOptional()
  socialMediaLinks?: Array<{ platform: string; link: string }>; // Social media links

  @ApiProperty()
  @IsArray()
  @IsOptional()
  workingHours?: Array<{ day: string; startTime: string; endTime: string }>; // Working hours
}