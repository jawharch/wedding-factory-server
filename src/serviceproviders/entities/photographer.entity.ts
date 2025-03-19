import { Entity, Column } from 'typeorm';
import { ServiceProvider } from './serviceprovider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Photographer extends ServiceProvider {
  @ApiProperty()
  @Column()
  cameraType: string; // e.g., 'Canon EOS R5'

  @ApiProperty()
  @Column()
  portfolioLink: string; // Link to the photographer's portfolio
}