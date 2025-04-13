import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceProvider } from './service-providers.entity';
import { CreateServiceProvidersDto } from './create-service-providers.dto';
import { UpdateServiceProvidersDto } from './update-service-providers.dto';

@Injectable()
export class ServiceProvidersService {
  constructor(
    @InjectRepository(ServiceProvider)
    private readonly repository: Repository<ServiceProvider>
  ) {
  }

  // Create a new service provider
  async create(createDto: CreateServiceProvidersDto): Promise<ServiceProvider> {
    const serviceProvider = this.repository.create(createDto);


    return this.repository.save(serviceProvider);
  }

  // Find all service providers
  async findAll(): Promise<ServiceProvider[]> {
    return this.repository.find();
  }

  // Find a service provider by ID
  async findOne(id: string): Promise<ServiceProvider> {
    const serviceProvider = await this.repository.findOne({
      where: { id }
    });
    if (!serviceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return serviceProvider;
  }

  // Update a service provider
  async update(id: string, updateDto: UpdateServiceProvidersDto): Promise<ServiceProvider> {
    const serviceProvider = await this.repository.preload({
      id,
      ...updateDto,
    });
    if (!serviceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return this.repository.save(serviceProvider);
  }

  // Delete a service provider
  async remove(id: string): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
  }
}