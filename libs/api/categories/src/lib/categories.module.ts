import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DatabaseModule } from '@vg/api-database';
import { GuardsModule } from '@vg/api-guards';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [DatabaseModule, GuardsModule, JwtModule],
  exports: [],
})
export class CategoriesModule {}
