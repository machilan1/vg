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
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Record } from './entities/record.entity';
import { CreateRecordDto } from './dtos/create-record.dto';
import { HttpCode } from '@nestjs/common';
import { UpdateRecordDto } from './dtos/update-record.dto';

@ApiTags('records')
@Controller('records')
export class ApiRecordsController {
  constructor(private readonly recordService: RecordsService) {}

  @Get()
  @ApiOperation({ operationId: 'getRecords' })
  @ApiNotFoundResponse({
    description: 'No products found',
  })
  getData(): Promise<Record[]> {
    // return this.recordsService.find();
    throw new Error('no implemented');
  }

  @Get(':recordId')
  @ApiOperation({ operationId: 'getRecordById' })
  @ApiNotFoundResponse({
    description: 'Record not found',
  })
  getRecord(@Param('recordId', ParseIntPipe) id: number): Promise<Record> {
    throw new Error('no implemented');
    // return this.RecordsService.findOne(id);
  }

  @Post()
  @ApiOperation({ operationId: 'createRecord' })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  create(@Body() body: CreateRecordDto): Promise<Record> {
    throw new Error('no implemented');
    // return this.RecordsService.create();
  }

  @Patch(':recordId')
  @ApiOperation({ operationId: 'updateRecord' })
  update(
    @Param('recordId') recordId: number,
    @Body() body: UpdateRecordDto,
  ): Promise<Record> {
    throw new Error('no implemented');
    // return this.RecordsService.update(id, body);
  }

  @Delete(':recordId')
  @ApiOperation({ operationId: 'deleteRecord' })
  @HttpCode(204)
  delete(@Param('recordId') id: number): Promise<void> {
    throw new Error('no implemented');
    // return this.RecordsService.delete(id);
  }
}
