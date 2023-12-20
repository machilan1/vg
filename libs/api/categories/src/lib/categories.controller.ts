import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Category } from '../entities/select-category.entity';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { JwtGuard, AdminGuard } from '@vg/api-guards';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ operationId: 'findCategories' })
  @ApiOkResponse({ type: [Category] })
  async find() {
    const res = await this.categoriesService.findMany();
    return res.map((entry) => new Category(entry));
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard, AdminGuard)
  @ApiOperation({ operationId: 'createCategory' })
  @ApiCreatedResponse({ type: Category })
  @ApiBadRequestResponse()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const res = await this.categoriesService.create(createCategoryDto);
    return new Category(res);
  }
}
