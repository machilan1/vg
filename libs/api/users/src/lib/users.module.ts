import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@vg/api-database';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [],
  exports: [UsersService],
})
export class UsersModule {}
