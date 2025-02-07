import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { log } from 'console';
import { PaginationLibsService } from 'src/pagination_libs/pagination_libs.service';

@Injectable()
export class FoodService {
  constructor(
    private prismaService: PrismaService,
    private readonly paginationService: PaginationLibsService,
  ) {}

  create(createFoodDto: CreateFoodDto) {
    return 'This action adds a new food';
  }

  async findAll(
    page: number,
    limit: number,
    featured?: string,
    name_food?: string,
  ) {
    try {
      // Chuyển đổi dữ liệu query từ string sang kiểu thích hợp
      const currentPage = Number(page) || 1;
      const pageSize = Number(limit) || 10;
      const skip = (currentPage - 1) * pageSize;

      // Tạo điều kiện truy vấn với Prisma
      const where: any = {};

      if (featured !== undefined) {
        where.featured = featured === 'true'; // Chuyển thành boolean
      }

      if (name_food) {
        where.name_food = { contains: name_food, mode: 'insensitive' }; // Tìm kiếm không phân biệt hoa thường
      }

      // Truy vấn danh sách món ăn
      const foods = await this.prismaService.food.findMany({
        where,
        orderBy: { food_id: 'desc' },
        skip,
        take: pageSize,
      });

      // Gọi PaginationService để lấy thông tin phân trang
      const paginationMeta = await this.paginationService.paginate(
        this.prismaService.food, // Model Prisma
        currentPage,
        pageSize,
        where,
      );

      return {
        status: 'success',
        filters: {
          featured: featured || null,
          limit: pageSize,
        },
        data: {
          docs: foods,
          pages: paginationMeta,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
