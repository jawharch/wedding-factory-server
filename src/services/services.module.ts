import { Module } from '@nestjs/common';
import { ServicesService } from './services/services.service';
import { ServicesController } from './controllers/services.controller';


@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
