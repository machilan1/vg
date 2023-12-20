import { Module } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';
import { OwnerGuard } from './owner.guard';

@Module({
  controllers: [],
  providers: [JwtGuard, OwnerGuard],
  imports: [],
  exports: [JwtGuard, OwnerGuard],
})
export class GuardsModule {}
