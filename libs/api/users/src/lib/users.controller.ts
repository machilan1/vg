import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import {
  ApiFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get()
  @ApiOperation({ operationId: 'findUsers' })
  @ApiOkResponse({ type: [User] })
  find() {
    throw new Error('not implemented');
  }

  @Get(':userId')
  @ApiOperation({ operationId: 'findUser' })
  @ApiOkResponse({ type: User })
  findOne(@Param('userId', ParseIntPipe) userId: number) {
    throw new Error('not implemented');
  }
}
