import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Trabalhar com validação no nestjs
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
