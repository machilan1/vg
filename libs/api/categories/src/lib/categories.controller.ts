import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Category } from '../entities/select-category.entity';
import { CreateCategoryDto } from '../dtos/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ operationId: 'findCategories' })
  @ApiOkResponse({ type: [Category] })
  find() {
    return this.categoriesService.find();
  }

  @Post()
  @ApiOperation({ operationId: 'createCategory' })
  @ApiCreatedResponse({ type: Category })
  @ApiBadRequestResponse()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }
}
