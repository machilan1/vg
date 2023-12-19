import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vg/api-database';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [],
  imports: [DatabaseModule],
})
export class ProductsModule {}
