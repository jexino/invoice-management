import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configure Handlebars as the templating engine
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public')); // Set the folder for HBS templates
  app.setViewEngine('hbs'); // Set Handlebars as the view engine

  await app.listen(3000);
}
bootstrap();
