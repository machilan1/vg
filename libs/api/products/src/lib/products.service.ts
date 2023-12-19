import { Inject, Injectable } from '@nestjs/common';
import { Database, PG_CONNECTION, product } from '@vg/api-database';
import {} from '@vg/shared-constants';
import { eq } from 'drizzle-orm';

@Injectable()
export class ProductsService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  find() {
    return this.conn.select().from(product);
  }

  async findOne(id: number) {
    const [res] = await this.conn
      .select()
      .from(product)
      .where(eq(product.productId, id));
    return res;
  }

  findProductsByCategory(categoryId: number) {
    // return this.conn.select().from(product).where({ categoryId });
  }

  findProductsByUser(userId: number) {
    // return this.conn.select().from(product).where({ userId });
  }

  create() {}

  update(id: number, body: any) {
    // return this.conn.select().from(product).where({ id });
  }

  delete(id: number) {
    // return this.conn.select().from(product).where({ id });
  }
}
