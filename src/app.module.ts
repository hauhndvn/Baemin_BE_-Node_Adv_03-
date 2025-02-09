import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PaginationLibsModule } from './pagination_libs/pagination_libs.module';
import { CategoryModule } from './category/category.module';
import { BanneritemModule } from './banneritem/banneritem.module';

@Module({
  imports: [
    FoodModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PaginationLibsModule,
    CategoryModule,
    BanneritemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
