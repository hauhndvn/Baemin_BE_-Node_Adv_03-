import { Injectable } from '@nestjs/common';
import { CreateBanneritemDto } from './dto/create-banneritem.dto';
import { UpdateBanneritemDto } from './dto/update-banneritem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BanneritemService {
  constructor(
    private prismaService: PrismaService,
  ) {}
  create(createBanneritemDto: CreateBanneritemDto) {
    return 'This action adds a new banneritem';
  }

 async findAll() {
  const banneritems = await this.prismaService.banneritems.findMany();
    return {
      status: 'success',
      data: {
        docs: banneritems,
      }
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} banneritem`;
  }

  update(id: number, updateBanneritemDto: UpdateBanneritemDto) {
    return `This action updates a #${id} banneritem`;
  }

  remove(id: number) {
    return `This action removes a #${id} banneritem`;
  }
}
