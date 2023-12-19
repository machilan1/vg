import { TAX_ID_LENGTH } from './../../../../shared/constants/src/lib/shared-constants';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiParam,
  ApiTags,
  ApiQuery,
  ApiOperation,
  ApiBadRequestResponse,
  ApiHideProperty,
  ApiResponseProperty,
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
    // return this.productsService.find();
    throw new Error('no implemented');
  }

  @Get(':productId')
  @ApiOperation({ operationId: 'getProductById' })
  @ApiNotFoundResponse({
    description: 'Product not found',
  })
  getProduct(@Param('productId', ParseIntPipe) id: number): Promise<Product> {
    throw new Error('no implemented');
    // return this.productsService.findOne(id);
  }

  @Post()
  @ApiOperation({ operationId: 'createProduct' })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  create(@Body() body: CreateProductDto): Promise<Product> {
    throw new Error('no implemented');
    // return this.productsService.create();
  }

  @Patch(':productId')
  @ApiOperation({ operationId: 'updateProduct' })
  update(
    @Param('productId') productId: number,
    @Body() body: UpdateProductDto,
  ): Promise<Product> {
    throw new Error('no implemented');
    // return this.productsService.update(id, body);
  }

  @Delete(':productId')
  @ApiOperation({ operationId: 'deleteProduct' })
  @HttpCode(204)
  delete(@Param('productId') id: number): Promise<void> {
    throw new Error('no implemented');
    // return this.productsService.delete(id);
  }
}
