import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceProviderCategory } from '../utils/service-provider.category';
import { City } from '../utils/city.enum';
import { Column, OneToMany } from 'typeorm';
import { Service } from '../services/entities/service.entity';
import { WeddingVenueType } from './utils/weddingplace.enum';

export class CreateServiceProvidersDto {
  @ApiProperty()
  @Column()
  businessName: string;

  @ApiProperty()
  @Column()
  city: City;

  @ApiProperty()
  @Column()
  @IsOptional()
  location: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: ServiceProviderCategory,
  })
  type: ServiceProviderCategory;

  @ApiProperty()
  @OneToMany(() => Service, (service) => service.serviceProvider)
  services: Service[];

  @ApiProperty()
  @Column()
  @IsOptional()
  capacity: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: WeddingVenueType,
    default: WeddingVenueType.PLACE })
  @IsOptional()
  weddingVenueType: WeddingVenueType;

  @ApiProperty()
  @Column()
  startingPrice: number;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  photos: string[];
}