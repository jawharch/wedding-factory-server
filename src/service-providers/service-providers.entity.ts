import { Column, Entity, OneToMany } from 'typeorm';
import { Service } from '../services/entities/service.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceProviderCategory } from '../utils/service-provider.category';
import { User } from '../users/entities/user.entity';
import { City } from '../utils/city.enum';
import { WeddingVenueType } from './utils/weddingplace.enum';
import { IsOptional } from 'class-validator';

@Entity()
export class ServiceProvider extends User {

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
  slug: string; // slug should be businessName lowercase seperated by - plus city

  @ApiProperty()
  @Column('json')
  photos: string[];
}