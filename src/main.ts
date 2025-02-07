import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // origin: "*" cho phép tất cả truy cập
  app.enableCors({
    // chỉ cho phép 2 domain sau truy cập
    origin: ['http://localhost:8080', 'http://localhost:3000'],
  });
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
