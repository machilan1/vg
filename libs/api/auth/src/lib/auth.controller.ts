import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthResponse } from './responses/auth.response';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { FindMeResponse } from './responses/find-me.response';
import { JwtGuard } from '@vg/api-guards';
import { UsersService } from '@vg/api-users';
import { User } from 'libs/api/users/src/entities/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  @ApiOperation({ operationId: 'register' })
  @ApiOkResponse({ type: AuthResponse })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({ operationId: 'login' })
  @ApiOkResponse({ type: AuthResponse })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'findMe' })
  @ApiOkResponse({ type: FindMeResponse })
  async findMe(@Req() req): Promise<User> {
    const { userId } = req['user'];
    const res = await this.usersService.findOne(userId);
    return new User(res);
  }
}
