import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@vg/api-database';
import { GuardsModule } from '@vg/api-guards';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DatabaseModule, GuardsModule],
  exports: [UsersService],
})
export class UsersModule {}
