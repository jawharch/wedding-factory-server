import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ServiceProvider } from 'src/serviceproviders/entities/serviceprovider.entity';
import { Service } from 'src/services/entities/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,ServiceProvider,Service])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
