import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ServiceProvider } from './serviceprovider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class WorkingHours {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  day: string; // e.g., 'Monday', 'Tuesday'

  @ApiProperty()
  @Column()
  startTime: string; // e.g., '09:00'

  @ApiProperty()
  @Column()
  endTime: string; // e.g., '17:00'

  @ApiProperty()
  @ManyToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.workingHours)
  serviceProvider: ServiceProvider;
}