import { Module } from '@nestjs/common';
import { BanneritemService } from './banneritem.service';
import { BanneritemController } from './banneritem.controller';

@Module({
  controllers: [BanneritemController],
  providers: [BanneritemService],
})
export class BanneritemModule {}
