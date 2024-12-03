import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ServiceprovidersModule } from './serviceproviders/serviceproviders.module';
import { ServicesModule } from './services/services.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'wedding',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ReviewsModule,
    ServiceprovidersModule,
    ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
