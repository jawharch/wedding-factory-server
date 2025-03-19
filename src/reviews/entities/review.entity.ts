import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Review {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column()
    rating: number; // e.g., 1 to 5

    @ApiProperty()
    @Column()
    comment: string;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiProperty()
    @Column()
    reviewerType: string; // 'user' or 'serviceProvider'

    @ApiProperty()
    @Column()
    reviewerId: string;

    @ApiProperty()
    @Column()
    reviewedType: string;

    @ApiProperty()
    @Column()
    reviewedId: string;
}
