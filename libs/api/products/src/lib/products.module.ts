import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vg/api-database';
import { ProductsService } from './products.service';
import { GuardsModule } from '@vg/api-guards';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [],
  imports: [DatabaseModule, GuardsModule, JwtModule],
})
export class ProductsModule {}
