import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ServiceProvider } from './serviceprovider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class SocialMedia {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  platform: string; // e.g., 'Instagram', 'Facebook'

  @ApiProperty()
  @Column()
  link: string; // URL to the social media profile

  @ApiProperty()
  @ManyToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.socialMediaLinks)
  serviceProvider: ServiceProvider;
}