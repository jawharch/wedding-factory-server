import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ServiceService } from '../services/services.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { Service } from '../entities/service.entity';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  // Create a new service
  @Post()
  @ApiCreatedResponse({ type: Service })
  async create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  // Get all services
  @Get()
  @ApiCreatedResponse({ type: [Service] })
  async findAll() {
    return this.serviceService.findAll();
  }

  // Get services by service provider ID
  @Get('by-service-provider')
  @ApiCreatedResponse({ type: [Service] })
  async findByServiceProviderId(@Query('serviceProviderId') serviceProviderId: string) {
    return this.serviceService.findByServiceProviderId(serviceProviderId);
  }

  // Get a service by ID
  @Get(':id')
  @ApiCreatedResponse({ type: Service })
  async findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  // Update a service
  @Patch(':id')
  @ApiCreatedResponse({ type: Service })
  async update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.serviceService.update(id, updateServiceDto);
  }

  // Delete a service
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}