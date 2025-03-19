import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvidersController } from './controllers/serviceproviders.controller';
import { ServiceProvidersService } from './services/serviceproviders.service';
import { ServiceProvider } from './entities/serviceprovider.entity';
import { Photographer } from './entities/photographer.entity';
import { Catering } from './entities/catering.entity';
import { WeddingVenue } from './entities/wedding-venue.entity';
import { SocialMedia } from './entities/social-media.entity';
import { WorkingHours } from './entities/working-hours.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceProvider,
      Photographer,
      Catering,
      WeddingVenue,
      SocialMedia,
      WorkingHours,
    ]),
  ],
  controllers: [ServiceProvidersController],
  providers: [ServiceProvidersService],
})
export class ServiceProvidersModule {}