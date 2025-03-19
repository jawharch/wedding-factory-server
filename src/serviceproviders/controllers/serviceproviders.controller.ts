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
import { ServiceProvidersService } from '../services/serviceproviders.service';
import { CreateServiceProviderDto } from '../dto/create-serviceprovider.dto';
import { UpdateServiceProviderDto } from '../dto/update-serviceprovider.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Review } from '../../reviews/entities/review.entity';
import { ServiceProvider } from '../entities/serviceprovider.entity';

@Controller('service-providers')
export class ServiceProvidersController {
  constructor(private readonly serviceProvidersService: ServiceProvidersService) {}

  // Create a new service provider
  @Post()
  @ApiCreatedResponse({ type: ServiceProvider })
  async create(@Body() createServiceProviderDto: CreateServiceProviderDto) {
    return this.serviceProvidersService.create(createServiceProviderDto);
  }

  // Get all service providers
  @Get()
  @ApiCreatedResponse({ type: [ServiceProvider] })
  async findAll() {
    return this.serviceProvidersService.findAll();
  }

  // Get service providers by type
  @Get('by-type')
  @ApiCreatedResponse({ type: [ServiceProvider] })
  async findByType(@Query('type') type: string) {
    return this.serviceProvidersService.findByType(type);
  }

  // Get a service provider by ID
  @Get(':id')
  @ApiCreatedResponse({ type: ServiceProvider })
  async findOne(@Param('id') id: string) {
    return this.serviceProvidersService.findOne(id);
  }

  // Update a service provider
  @Patch(':id')
  @ApiCreatedResponse({ type: ServiceProvider })
  async update(
    @Param('id') id: string,
    @Body() updateServiceProviderDto: UpdateServiceProviderDto,
  ) {
    return this.serviceProvidersService.update(id, updateServiceProviderDto);
  }

  // Delete a service provider
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.serviceProvidersService.remove(id);
  }
}