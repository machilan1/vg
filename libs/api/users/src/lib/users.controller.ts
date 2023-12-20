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
import { AdminGuard, JwtGuard } from '@vg/api-guards';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ operationId: 'findUsers' })
  @ApiOkResponse({ type: [User] })
  @ApiNotFoundResponse()
  async find() {
    const res = await this.usersService.find();
    return res.map((entry) => new User(entry));
  }

  @Get(':userId')
  @ApiOperation({ operationId: 'findUser' })
  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  async findOne(@Param('userId', ParseIntPipe) userId: number) {
    const res = await this.usersService.findOne(userId);
    return new User(res);
  }

  @Patch(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'updateUser' })
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse()
  async update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const res = await this.usersService.update(userId, updateUserDto);

    return new User(res);
  }

  // admin allowed

  @Delete(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, AdminGuard)
  @ApiOperation({ operationId: 'deleteUser' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  async delete(@Param('userId', ParseIntPipe) userId: number) {
    await this.usersService.delete(userId);
  }
}
