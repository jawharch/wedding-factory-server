import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceProvider } from '../../service-providers/service-providers.entity';

@Entity()
export class Service {
  @ApiProperty() @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @ManyToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.services)
  serviceProvider: ServiceProvider;
}