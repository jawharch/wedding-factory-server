import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceprovidersService } from '../services/serviceproviders.service';
import { CreateServiceproviderDto } from '../dto/create-serviceprovider.dto';
import { UpdateServiceproviderDto } from '../dto/update-serviceprovider.dto';


@Controller('serviceproviders')
export class ServiceprovidersController {
  constructor(private readonly serviceprovidersService: ServiceprovidersService) {}

  @Post()
  create(@Body() createServiceproviderDto: CreateServiceproviderDto) {
    return this.serviceprovidersService.create(createServiceproviderDto);
  }

  @Get()
  findAll() {
    return this.serviceprovidersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceprovidersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceproviderDto: UpdateServiceproviderDto) {
    return this.serviceprovidersService.update(+id, updateServiceproviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceprovidersService.remove(+id);
  }
}
