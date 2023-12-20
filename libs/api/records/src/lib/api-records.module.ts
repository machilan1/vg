import { Module } from '@nestjs/common';
import { ApiRecordsController } from './api-records.controller';
import { RecordsService } from './api-records.service';
import { DatabaseModule } from '@vg/api-database';
import { GuardsModule } from '@vg/api-guards';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ApiRecordsController],
  providers: [RecordsService],
  imports: [DatabaseModule, GuardsModule, JwtModule],
  exports: [],
})
export class RecordsModule {}
