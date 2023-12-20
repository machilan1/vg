import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { UsersService } from '@vg/api-users';
import { DatabaseModule } from '@vg/api-database';
import { AuthService } from './auth.service';
import { GuardsModule } from '@vg/api-guards';

@Global()
@Module({
  controllers: [AuthController],
  providers: [ConfigService, UsersService, AuthService],
  imports: [DatabaseModule, GuardsModule],
  exports: [AuthService],
})
export class AuthModule {}
