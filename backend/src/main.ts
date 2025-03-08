import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CLIENT_URL,
    methods: '*'
  })

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
