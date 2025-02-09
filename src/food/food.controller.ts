import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.create(createFoodDto);
  }

  @Get()
  findAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('featured') featured?: string,
    @Query('name_food') name_food?: string,
  ) {
    return this.foodService.findAll(
      Number(page),
      Number(limit),
      featured,
      name_food,
    );
  }

  @Get('/eatery/:eatery_id')
  findEatery(
    @Param('eatery_id') eatery_id: number,
    @Query('featured') featured?: string
) {
    return this.foodService.findEatery(Number(eatery_id), featured);
  }

  @Get('/category/:category_id')
  findCategory(
    @Param('category_id') category_id: number,
    @Query('featured') featured?: string
  ) {
    return this.foodService.findCategory(Number(category_id), featured);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodService.remove(+id);
  }
}
