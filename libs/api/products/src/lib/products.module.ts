import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vg/database';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [DatabaseModule],
})
export class ProductsModule {}
