import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { ReviewService } from '../services/reviews.service';
import { Review } from '../entities/review.entity';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // Create a new review
  @Post()
  @ApiCreatedResponse({ type: Review })
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  // Get all reviews
  @Get()
  @ApiCreatedResponse({ type: [Review] })
  async findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  // Get a review by ID
  @Get(':id')
  @ApiCreatedResponse({ type: Review })
  async findOne(@Param('id') id: string): Promise<Review> {
    return this.reviewService.findOne(id);
  }

  // Update a review
  @Patch(':id')
  @ApiCreatedResponse({ type: Review })
  async update(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ): Promise<Review> {
    return this.reviewService.update(id, updateReviewDto);
  }

  // Delete a review
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}