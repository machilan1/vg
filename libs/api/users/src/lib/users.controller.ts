import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from '../dtos/update-user.dto';

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
  @ApiOperation({ operationId: 'updateUser' })
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse()
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':userId')
  @ApiOperation({ operationId: 'deleteUser' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.delete(userId);
  }
}
