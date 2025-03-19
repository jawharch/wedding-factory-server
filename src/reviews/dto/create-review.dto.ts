import { IsIn, IsInt, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty()
  @IsString()
  comment: string;

  // Reviewer
  @ApiProperty()
  @IsIn(['user', 'serviceProvider'])
  reviewerType: string; // 'user' or 'serviceProvider'

  @ApiProperty()
  @IsString()
  reviewerId: string; // ID of the User or ServiceProvider

  // Reviewed entity
  @ApiProperty()
  @IsIn(['user', 'serviceProvider'])
  reviewedType: string; // 'user' or 'serviceProvider'

  @ApiProperty()
  @IsString()
  reviewedId: string; // ID of the User or ServiceProvider
}