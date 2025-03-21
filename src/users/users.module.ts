import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { Admin } from './entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}