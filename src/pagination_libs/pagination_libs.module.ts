import { Global, Module } from '@nestjs/common';
import { PaginationLibsService } from './pagination_libs.service';
@Global()
@Module({
  providers: [PaginationLibsService],
  exports: [PaginationLibsService],
})
export class PaginationLibsModule {}
