import { Module } from '@nestjs/common';
import { ApiRecordsController } from './api-records.controller';
import { RecordsService } from './api-records.service';
import { DatabaseModule } from '@vg/api-database';
import { GuardsModule } from '@vg/api-guards';

@Module({
  controllers: [ApiRecordsController],
  providers: [RecordsService],
  imports: [DatabaseModule, GuardsModule],
  exports: [],
})
export class RecordsModule {}
