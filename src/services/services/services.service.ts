import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { Service } from '../entities/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  // Create a new service
  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(service);
  }

  // Find all services
  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  // Find services by service provider ID
  async findByServiceProviderId(serviceProviderId: string): Promise<Service[]> {
    return this.serviceRepository.createQueryBuilder('service')
      .where('service.serviceProviderId = :serviceProviderId', { serviceProviderId })
      .getMany();
  }

  // Find a service by ID
  async findOne(id: string): Promise<Service> {
    const service = await this.serviceRepository.findOne({ where: { id } });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  // Update a service
  async update(id: string, updateServiceDto: UpdateServiceDto): Promise<Service> {
    const service = await this.serviceRepository.preload({
      id,
      ...updateServiceDto,
    });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return this.serviceRepository.save(service);
  }

  // Delete a service
  async remove(id: string): Promise<void> {
    const result = await this.serviceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }
}