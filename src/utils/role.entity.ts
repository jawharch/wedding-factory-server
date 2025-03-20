import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleTypes } from './user-roles.enum';
import { ServiceProvider } from '../serviceproviders/entities/serviceprovider.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Admin } from '../users/entities/admin.entity';

@Entity()
export class Role {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  type: RoleTypes; // e.g., 'admin', 'serviceProvider'

  @ApiProperty()
  @Column('json')
  permissions: string[];

  @ApiProperty()
  @OneToOne(() => Admin, { nullable: true })
  admin?: Admin;

  @ApiProperty()
  @OneToOne(() => ServiceProvider, { nullable: true })
  serviceProvider?: ServiceProvider;
}
