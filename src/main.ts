import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Generated API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Serve Swagger JSON at /swagger-json
  const fs = require('fs');
  fs.writeFileSync('./swagger.json', JSON.stringify(document));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
