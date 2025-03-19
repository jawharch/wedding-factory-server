import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Relation } from 'typeorm';
import { ServiceProvider } from '../../serviceproviders/entities/serviceprovider.entity';
import { ApiProperty } from '@nestjs/swagger';

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
  serviceProvider: Relation<ServiceProvider>;
}