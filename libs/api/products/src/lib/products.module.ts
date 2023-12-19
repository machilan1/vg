import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vg/api-database';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [DatabaseModule],
})
export class ProductsModule {}
