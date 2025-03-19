import { Entity, Column } from 'typeorm';
import { ServiceProvider } from './serviceprovider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Catering extends ServiceProvider {
    @ApiProperty()
    @Column()
    cuisineType: string; // e.g., 'French', 'Italian'

    @ApiProperty()
    @Column('json')
    menu: string[]; // Array of menu items
}