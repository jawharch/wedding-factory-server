import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../utils/role.entity';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @OneToOne(() => Role) // User HAS-A Role
  role: Role;

  @ApiProperty()
  @OneToMany(() => Review, (review) => review.reviewerId)
  reviews: Review[]; // Reviews written by the user
}