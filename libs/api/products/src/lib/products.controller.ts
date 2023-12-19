import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ApiNotFoundResponse,
  ApiTags,
  ApiOperation,
  ApiBadRequestResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ operationId: 'getProducts' })
  @ApiNotFoundResponse({
    description: 'No products found',
  })
  getData(): Promise<Product[]> {
    return this.productsService.find();
  }

  @Get(':productId')
  @ApiOperation({ operationId: 'getProductById' })
  @ApiNotFoundResponse({
    description: 'Product not found',
  })
  getProduct(@Param('productId', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  @ApiOperation({ operationId: 'createProduct' })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  async create(@Body() body: CreateProductDto): Promise<Product> {
    const res = await this.productsService.create(body);
    return res;
  }

  @Patch(':productId')
  @ApiOperation({ operationId: 'updateProduct' })
  async update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    console.log(123456);
    console.log(updateProductDto);
    const res = await this.productsService.update(productId, updateProductDto);
    console.log(res);
    return res;
  }

  @Delete(':productId')
  @ApiOperation({ operationId: 'deleteProduct' })
  @HttpCode(204)
  async delete(@Param('productId', ParseIntPipe) id: number) {
    const res = await this.productsService.delete(id);
  }
}
