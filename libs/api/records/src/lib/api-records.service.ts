import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Database, PG_CONNECTION, record } from '@vg/api-database';
import { Relation, eq } from 'drizzle-orm';
import { CreateRecordDto } from './dtos/create-record.dto';
import { UpdateRecordDto } from './dtos/update-record.dto';
import { generateSN } from './util/generate-sn';
import { Record } from './entities/record.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class RecordsService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  async findMany() {
    const res = await this.conn.select().from(record);
    return res.map((entry) => new Record(entry));
  }

  async findOne(recordId: number) {
    const res = await this.conn.query.record.findFirst({
      where: eq(record.recordId, recordId),
    });

    if (!res) {
      throw new NotFoundException();
    }
    return new Record(res!);
  }

  async create(createRecordDto: CreateRecordDto) {
    const [res] = await this.conn
      .insert(record)
      .values({ ...createRecordDto, trackNumber: generateSN() })
      .returning({
        recordId: record.recordId,
        productId: record.productId,
        createdAt: record.createdAt,
        unitPrice: record.unitPrice,
        unitOfMeasure: record.unitOfMeasure,
        trackNumber: record.trackNumber,
      });
    return new Record(res);
  }

  async update(recordId: number, updateRecordDto: UpdateRecordDto) {
    const [res] = await this.conn
      .update(record)
      .set(updateRecordDto)
      .where(eq(record.recordId, recordId))
      .returning({
        recordId: record.recordId,
        productId: record.productId,
        createdAt: record.createdAt,
        unitPrice: record.unitPrice,
        unitOfMeasure: record.unitOfMeasure,
        trackNumber: record.trackNumber,
      });
    return new Record(res);
  }

  async delete(recordId: number) {
    await this.conn.delete(record).where(eq(record.recordId, recordId));
  }
}
