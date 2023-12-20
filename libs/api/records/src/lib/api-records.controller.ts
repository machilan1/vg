import {
  ApiNotFoundResponse,
  ApiTags,
  ApiOperation,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { RecordsService } from './api-records.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Record } from './entities/record.entity';
import { CreateRecordDto } from './dtos/create-record.dto';
import { HttpCode } from '@nestjs/common';
import { UpdateRecordDto } from './dtos/update-record.dto';
import { JwtGuard } from '@vg/api-guards';

@ApiTags('records')
@Controller('records')
export class ApiRecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  @ApiOperation({ operationId: 'getRecords' })
  @ApiNotFoundResponse({
    description: 'No products found',
  })
  async getData(): Promise<Record[]> {
    const res = await this.recordsService.findMany();
    const processed = res.map((entry) => new Record(entry));
    return processed;
  }

  @Get(':recordId')
  @ApiOperation({ operationId: 'getRecordById' })
  @ApiNotFoundResponse({
    description: 'Record not found',
  })
  async getRecord(
    @Param('recordId', ParseIntPipe) id: number,
  ): Promise<Record> {
    const res = await this.recordsService.findOne(id);
    if (!res) {
      throw new NotFoundException('record not found');
    }
    return new Record(res);
  }

  @Post()
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'createRecord' })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  async create(@Body() body: CreateRecordDto): Promise<Record> {
    const res = await this.recordsService.create(body);
    return new Record(res);
  }

  @Patch(':recordId')
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'updateRecord' })
  async update(
    @Param('recordId') recordId: number,
    @Body() body: UpdateRecordDto,
  ): Promise<Record> {
    const res = await this.recordsService.update(recordId, body);
    return new Record(res);
  }

  // Admin allowed

  @Delete(':recordId')
  @UseGuards(JwtGuard)
  @ApiOperation({ operationId: 'deleteRecord' })
  @HttpCode(204)
  delete(@Param('recordId') id: number): Promise<void> {
    return this.recordsService.delete(id);
  }
}
