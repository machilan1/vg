import { Global, Module } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';
import { OwnerGuard } from './owner.guard';

@Global()
@Module({
  controllers: [],
  providers: [JwtGuard, OwnerGuard],
  imports: [],
  exports: [JwtGuard, OwnerGuard],
})
export class GuardsModule {}
