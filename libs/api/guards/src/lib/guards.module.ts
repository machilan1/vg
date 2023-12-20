import { Module } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { OwnerGuard } from './owner.guard';

@Module({
  controllers: [],
  providers: [JwtGuard, OwnerGuard, JwtService],
  imports: [JwtModule],
  exports: [JwtGuard, OwnerGuard],
})
export class GuardsModule {}
