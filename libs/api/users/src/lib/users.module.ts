import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@vg/api-database';
import { GuardsModule } from '@vg/api-guards';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DatabaseModule, GuardsModule, JwtModule],
  exports: [UsersService],
})
export class UsersModule {}
