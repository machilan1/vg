import { Global, Module } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';
import { OwnerGuard } from './owner.guard';
import { AdminGuard } from './admin.guard';

@Global()
@Module({
  controllers: [],
  providers: [JwtGuard, OwnerGuard, AdminGuard],
  imports: [],
  exports: [JwtGuard, OwnerGuard, AdminGuard],
})
export class GuardsModule {}
