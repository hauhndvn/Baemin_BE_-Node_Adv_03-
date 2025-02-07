import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaginationLibsService {
  constructor(private readonly prismaSerive: PrismaService) {}

  async paginate<T>(
    model: { count: Function }, // Model Prisma cần truy vấn
    currentPage: number,
    limit: number,
    where: object = {}, // Điều kiện lọc dữ liệu
  ) {
    const totalRows = await model.count({ where });
    const totalPages = Math.ceil(totalRows / limit);

    return {
      totalRows,
      totalPages,
      currentPage,
      next: currentPage < totalPages ? currentPage + 1 : null,
      prev: currentPage > 1 ? currentPage - 1 : null,
      hasNext: currentPage < totalPages,
      hasPrev: currentPage > 1,
    };
  }
}
