import { Module } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { OwnerGuard } from './owner.guard';

@Module({
  controllers: [],
  providers: [JwtGuard, JwtService],
  imports: [JwtModule],
  exports: [JwtGuard, OwnerGuard],
})
export class GuardsModule {}
