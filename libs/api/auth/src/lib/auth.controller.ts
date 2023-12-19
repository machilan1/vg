import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthResponse } from './responses/auth.response';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { FindMeResponse } from './responses/find-me.response';
import { FindMeQueryParamDto } from './dtos/find-me-qeury.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
  @ApiOperation({ operationId: 'findMe' })
  @ApiOkResponse({ type: FindMeResponse })
  findMe(@Query() params: FindMeQueryParamDto): Promise<FindMeResponse> {
    return this.authService.findMe(params);
  }
}
