import { Module } from '@nestjs/common';
import { ApiRecordsController } from './api-records.controller';
import { RecordsService } from './api-records.service';
import { DatabaseModule } from '@vg/api-database';

@Module({
  controllers: [ApiRecordsController],
  providers: [RecordsService],
  imports: [DatabaseModule],
  exports: [],
})
export class RecordsModule {}
