import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  console.table({
    'Database Host': process.env.DB_HOST,
    'Database Port': process.env.DB_PORT,
    'Database Username': process.env.DB_USERNAME,
    'Database Password': process.env.DB_PASSWORD
      ? process.env.DB_PASSWORD
      : 'not set',
    'Database Name': process.env.DB_DATABASE,
  });

  await app.listen(3000);
}
bootstrap();
