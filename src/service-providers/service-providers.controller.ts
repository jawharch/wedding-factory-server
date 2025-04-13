import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServiceProvidersService } from './service-providers.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ServiceProvider } from './service-providers.entity';
import { UpdateServiceProvidersDto } from './update-service-providers.dto';
import { CreateServiceProvidersDto } from './create-service-providers.dto';
import { WeddingVenueType } from './utils/weddingplace.enum';

@Controller('service-providers')
export class ServiceProvidersController {
  constructor(private readonly service: ServiceProvidersService) {
  }

  // Create a new service provider
  @Post()
  @ApiCreatedResponse({ type: ServiceProvider })
  async create(@Body() createDto: CreateServiceProvidersDto) {
    return this.service.create(createDto);
  }

  // Get all service providers
  @Get()
  @ApiCreatedResponse({ type: [ServiceProvider] })
  async findAll() {
    return this.service.findAll();
  }

  // Get a service provider by ID
  @Get(':id')
  @ApiCreatedResponse({ type: ServiceProvider })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  // Update a service provider
  @Patch(':id')
  @ApiCreatedResponse({ type: ServiceProvider })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateServiceProvidersDto,
  ) {
    return this.service.update(id, updateDto);
  }

  // Delete a service provider
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  // Get all WeddingVenueType enum values
  @Get('wedding-venue-types')
  @ApiOkResponse()
  async getWeddingVenueTypes(): Promise<string[]> {
    return Object.values(WeddingVenueType);
  }
}