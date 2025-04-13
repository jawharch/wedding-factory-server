import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';
import { ApiProperty } from '@nestjs/swagger';
import { RoleTypes } from '../../utils/user-roles.enum';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  fullName: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column({ type: 'enum', enum: RoleTypes, default: RoleTypes.USER })
  role: RoleTypes;

  @ApiProperty()
  @OneToMany(() => Review, (review) => review.reviewerId)
  reviews: Review[];
}