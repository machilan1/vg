import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

import { Category } from '../entities/select-category.entity';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOkResponse({ type: [Category] })
  find() {
    return this.categoriesService.find();
  }

  // @Post()
  // @ApiOperation({ operationId: 'createCategory' })
  // @ApiCreatedResponse({ type: Category })
  // create(@Body() createCategoryDto: CreateCategoryDto) {
  //   return this.categoriesService.create(createCategoryDto);
  // }
}
