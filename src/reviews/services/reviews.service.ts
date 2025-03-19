import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  // Create a new review
  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const review = this.reviewRepository.create(createReviewDto);
    return this.reviewRepository.save(review);
  }

  // Find all reviews
  async findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  // Find a review by ID
  async findOne(id: string): Promise<Review> {
    const review = await this.reviewRepository.findOne({ where: { id } });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  // Update a review
  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    const review = await this.reviewRepository.preload({
      id,
      ...updateReviewDto,
    });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return this.reviewRepository.save(review);
  }

  // Delete a review
  async remove(id: string): Promise<void> {
    const result = await this.reviewRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
  }

  async findAllWithDetails(): Promise<Review[]> {
    return this.reviewRepository
      .createQueryBuilder('review')
      .leftJoinAndMapOne(
        'review.reviewer',
        'user',
        'user',
        'review.reviewerType = :userType AND review.reviewerId = user.id',
        { userType: 'user' },
      )
      .leftJoinAndMapOne(
        'review.reviewer',
        'serviceProvider',
        'serviceProvider',
        'review.reviewerType = :serviceProviderType AND review.reviewerId = serviceProvider.id',
        { serviceProviderType: 'serviceProvider' },
      )
      .leftJoinAndMapOne(
        'review.reviewed',
        'user',
        'userReviewed',
        'review.reviewedType = :userType AND review.reviewedId = userReviewed.id',
        { userType: 'user' },
      )
      .leftJoinAndMapOne(
        'review.reviewed',
        'serviceProvider',
        'serviceProviderReviewed',
        'review.reviewedType = :serviceProviderType AND review.reviewedId = serviceProviderReviewed.id',
        { serviceProviderType: 'serviceProvider' },
      )
      .getMany();
  }
}