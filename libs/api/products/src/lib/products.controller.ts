import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ApiNotFoundResponse,
  ApiTags,
  ApiOperation,
  ApiBadRequestResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { JwtGuard } from '@vg/api-guards';
import { FilterProductParams } from './dtos/filter-product-param.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ operationId: 'getProducts' })
  @ApiNotFoundResponse({
    description: 'No products found',
  })
  async getMany(@Query() params: FilterProductParams): Promise<Product[]> {
    const findRes = await this.productsService.findMany(params);
    const res = findRes.map((entry) => new Product(entry));
    return res;
  }

  @Get(':productId')
  @ApiOperation({ operationId: 'getProductById' })
  @ApiNotFoundResponse({
    description: 'Product not found',
  })
  async getProduct(@Param('productId', ParseIntPipe) id: number) {
    const res = await this.productsService.findOne(id);
    if (!res) {
      throw new NotFoundException();
    }
    return new Product(res!);
  }
  //

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'createProduct' })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  async create(@Body() body: CreateProductDto): Promise<Product> {
    const res = await this.productsService.create(body);
    return new Product(res);
  }

  @Patch(':productId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'updateProduct' })
  async update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const res = await this.productsService.update(productId, updateProductDto);
    return new Product(res);
  }

  // Admin only

  @Delete(':productId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'deleteProduct' })
  @HttpCode(204)
  async delete(@Param('productId', ParseIntPipe) id: number) {
    await this.productsService.delete(id);
  }
}
