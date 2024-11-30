import { Module } from '@nestjs/common';
import { ServiceprovidersController } from './controllers/serviceproviders.controller';
import { ServiceprovidersService } from './services/serviceproviders.service';


@Module({
  controllers: [ServiceprovidersController],
  providers: [ServiceprovidersService],
})

export class ServiceprovidersModule {}
