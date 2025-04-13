import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceController } from './controllers/services.controller';
import { ServiceService } from './services/services.service';
import { Service } from './entities/service.entity';
import { ServiceProvider } from '../service-providers/service-providers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, ServiceProvider])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}