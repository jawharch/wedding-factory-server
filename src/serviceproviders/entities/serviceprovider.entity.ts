import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';
import { SocialMedia } from './social-media.entity';
import { Service } from '../../services/entities/service.entity';
import { WorkingHours } from './working-hours.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ServiceProvider {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  region: string;

  @ApiProperty()
  @Column()
  type: string; // e.g., 'photographer', 'catering', 'weddingVenue'

  @ApiProperty()
  @OneToMany(() => Review, (review) => review.reviewedId)
  reviews: Review[];

  @ApiProperty()
  @OneToMany(() => SocialMedia, (socialMedia) => socialMedia.serviceProvider)
  socialMediaLinks: SocialMedia[];

  @ApiProperty()
  @OneToMany(() => Service, (service) => service.serviceProvider)
  services: Service[];

  @ApiProperty()
  @OneToMany(() => WorkingHours, (workingHours) => workingHours.serviceProvider)
  workingHours: WorkingHours[];
}