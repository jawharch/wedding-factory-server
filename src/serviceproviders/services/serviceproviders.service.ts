import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceProvider } from '../entities/serviceprovider.entity';
import { Photographer } from '../entities/photographer.entity';
import { Catering } from '../entities/catering.entity';
import { WeddingVenue } from '../entities/wedding-venue.entity';
import { SocialMedia } from '../entities/social-media.entity';
import { WorkingHours } from '../entities/working-hours.entity';
import { CreateServiceProviderDto } from '../dto/create-serviceprovider.dto';
import { UpdateServiceProviderDto } from '../dto/update-serviceprovider.dto';

@Injectable()
export class ServiceProvidersService {
  constructor(
    @InjectRepository(ServiceProvider)
    private readonly serviceProviderRepository: Repository<ServiceProvider>,
    @InjectRepository(Photographer)
    private readonly photographerRepository: Repository<Photographer>,
    @InjectRepository(Catering)
    private readonly cateringRepository: Repository<Catering>,
    @InjectRepository(WeddingVenue)
    private readonly weddingVenueRepository: Repository<WeddingVenue>,
    @InjectRepository(SocialMedia)
    private readonly socialMediaRepository: Repository<SocialMedia>,
    @InjectRepository(WorkingHours)
    private readonly workingHoursRepository: Repository<WorkingHours>,
  ) {}

  // Create a new service provider
  async create(createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider> {
    let serviceProvider: ServiceProvider;

    switch (createServiceProviderDto.type) {
      case 'photographer':
        serviceProvider = this.photographerRepository.create(createServiceProviderDto);
        break;
      case 'catering':
        serviceProvider = this.cateringRepository.create(createServiceProviderDto);
        break;
      case 'weddingVenue':
        serviceProvider = this.weddingVenueRepository.create(createServiceProviderDto);
        break;
      default:
        throw new Error('Invalid service provider type');
    }

    // Save social media links
    if (createServiceProviderDto.socialMediaLinks) {
      serviceProvider.socialMediaLinks = await Promise.all(
        createServiceProviderDto.socialMediaLinks.map(async (socialMedia) => {
          return this.socialMediaRepository.create({
            ...socialMedia,
            serviceProvider,
          });
        }),
      );
    }

    // Save working hours
    if (createServiceProviderDto.workingHours) {
      serviceProvider.workingHours = await Promise.all(
        createServiceProviderDto.workingHours.map(async (workingHours) => {
          return this.workingHoursRepository.create({
            ...workingHours,
            serviceProvider,
          });
        }),
      );
    }

    return this.serviceProviderRepository.save(serviceProvider);
  }

  // Find all service providers
  async findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderRepository.find({
      relations: ['socialMediaLinks', 'workingHours'],
    });
  }

  // Find service providers by type
  async findByType(type: string): Promise<ServiceProvider[]> {
    return this.serviceProviderRepository.find({ where: { type } });
  }

  // Find a service provider by ID
  async findOne(id: string): Promise<ServiceProvider> {
    const serviceProvider = await this.serviceProviderRepository.findOne({
      where: { id },
      relations: ['socialMediaLinks', 'workingHours'],
    });
    if (!serviceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return serviceProvider;
  }

  // Update a service provider
  async update(id: string, updateServiceProviderDto: UpdateServiceProviderDto): Promise<ServiceProvider> {
    const serviceProvider = await this.serviceProviderRepository.preload({
      id,
      ...updateServiceProviderDto,
    });
    if (!serviceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return this.serviceProviderRepository.save(serviceProvider);
  }

  // Delete a service provider
  async remove(id: string): Promise<void> {
    const result = await this.serviceProviderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
  }
}