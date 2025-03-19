import { Entity, Column } from 'typeorm';
import { ServiceProvider } from './serviceprovider.entity';
import { WeddingPlace } from "src/utils/weddingplace.enum";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class WeddingVenue extends ServiceProvider {
     @ApiProperty()
     @Column()
     capacity: number; // Maximum number of guests

     @ApiProperty()
     @Column()
     location: string; // Address or location of the venue
}