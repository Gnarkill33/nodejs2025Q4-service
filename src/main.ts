import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export const PORT = Number(process.env.PORT) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const filePath = join(__dirname, '..', 'doc', 'api.yaml');
  const yamlFile = readFileSync(filePath, 'utf8');
  const swaggerDocument = yaml.load(yamlFile);

  SwaggerModule.setup('doc', app, swaggerDocument);

  await app.listen(PORT);
}
bootstrap();
