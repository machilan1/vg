import { Module } from '@nestjs/common';
import { ApiRecordsController } from './api-records.controller';
import { RecordsService } from './api-records.service';

@Module({
  controllers: [ApiRecordsController],
  providers: [RecordsService],
  imports: [],
  exports: [],
})
export class RecordsModule {}
