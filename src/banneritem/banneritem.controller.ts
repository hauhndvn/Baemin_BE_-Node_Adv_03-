import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BanneritemService } from './banneritem.service';
import { CreateBanneritemDto } from './dto/create-banneritem.dto';
import { UpdateBanneritemDto } from './dto/update-banneritem.dto';

@Controller('banneritem')
export class BanneritemController {
  constructor(private readonly banneritemService: BanneritemService) {}

  @Post()
  create(@Body() createBanneritemDto: CreateBanneritemDto) {
    return this.banneritemService.create(createBanneritemDto);
  }

  @Get()
  findAll() {
    return this.banneritemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banneritemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanneritemDto: UpdateBanneritemDto) {
    return this.banneritemService.update(+id, updateBanneritemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banneritemService.remove(+id);
  }
}
