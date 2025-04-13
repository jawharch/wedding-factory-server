import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ServiceModule } from './services/services.module';
import { ServiceProvidersModule } from './service-providers/service-providers.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'superuser',
      database: 'wedding',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule,
    UsersModule,
    AuthModule,
    ReviewsModule,
    ServiceModule,
    ServiceProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
