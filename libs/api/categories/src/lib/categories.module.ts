import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DatabaseModule } from '@vg/api-database';
import { GuardsModule } from '@vg/api-guards';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [DatabaseModule, GuardsModule],
  exports: [],
})
export class CategoriesModule {}
