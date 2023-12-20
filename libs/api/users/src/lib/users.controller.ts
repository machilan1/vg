import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { JwtGuard } from '@vg/api-guards';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ operationId: 'findUsers' })
  @ApiOkResponse({ type: [User] })
  @ApiNotFoundResponse()
  find() {
    return this.usersService.find();
  }

  @Get(':userId')
  @ApiOperation({ operationId: 'findUser' })
  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  findOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Patch(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'updateUser' })
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse()
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(userId, updateUserDto);
  }

  // admin allowed

  @Delete(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'deleteUser' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.delete(userId);
  }
}
