import { Inject, Injectable } from '@nestjs/common';
import { Database, PG_CONNECTION, product } from '@vg/api-database';
import {} from '@vg/shared-constants';

@Injectable()
export class ProductsService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  create() {}

  find() {
    return this.conn.select().from(product);
  }

  findOne() {}

  update() {}

  delete() {}
}
