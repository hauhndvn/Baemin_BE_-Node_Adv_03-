import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationLibsModule } from './pagination_libs/pagination_libs.module';

@Module({
  imports: [
    FoodModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PaginationLibsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
