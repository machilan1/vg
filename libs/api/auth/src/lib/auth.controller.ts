import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthResponse } from '../entities/auth-response.entity';
import { LoginDto } from '../dtos/login.dto';
import { FindMeResponse } from '../entities/find-me-response.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ operationId: 'register' })
  @ApiOkResponse({ type: AuthResponse })
  register(@Body() registerDto: RegisterDto) {
    throw new Error('no implemented');
  }

  @Post('login')
  @ApiOperation({ operationId: 'register' })
  @ApiOkResponse({ type: AuthResponse })
  login(@Body() loginDto: LoginDto) {
    throw new Error('no implemented');
  }

  @Get('me')
  @ApiOperation({ operationId: 'findMe' })
  @ApiOkResponse({ type: FindMeResponse })
  findMe() {
    throw new Error('no implemented');
  }
}
