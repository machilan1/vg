import { Inject, Injectable } from '@nestjs/common';
import { Database, PG_CONNECTION, record } from '@vg/api-database';
import { Relation, eq } from 'drizzle-orm';
import { CreateRecordDto } from './dtos/create-record.dto';
import { UpdateRecordDto } from './dtos/update-record.dto';
import { generateSN } from './util/generate-sn';

@Injectable()
export class RecordsService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  async findMany() {
    const res = await this.conn.select().from(record);
    return res;
  }

  async findOne(recordId: number) {
    const res = await this.conn.query.record.findFirst({
      where: eq(record.recordId, recordId),
    });

    return res;
  }

  async create(createRecordDto: CreateRecordDto) {
    const [res] = await this.conn
      .insert(record)
      .values({ ...createRecordDto, trackNumber: generateSN() })
      .returning();
    return res;
  }

  async update(recordId: number, updateRecordDto: UpdateRecordDto) {
    const [res] = await this.conn
      .update(record)
      .set(updateRecordDto)
      .where(eq(record.recordId, recordId))
      .returning();
    return res;
  }

  async delete(recordId: number) {
    await this.conn.delete(record).where(eq(record.recordId, recordId));
  }
}
