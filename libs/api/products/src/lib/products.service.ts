import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Database, PG_CONNECTION, product, record } from '@vg/api-database';
import {} from '@vg/shared-constants';
import { eq } from 'drizzle-orm';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { records, ...createProductPayload } = createProductDto;

    const res = await this.conn.transaction(async (tx) => {
      const [productRes] = await tx
        .insert(product)
        .values(createProductPayload)
        .returning();

      const insertRecords = records.map((record) => ({
        ...record,
        productId: productRes.productId,
        trackNumber: generateSN(),
      }));

      await tx.insert(record).values(insertRecords);

      const res = await tx.query.product.findFirst({
        columns: { categoryId: false, userId: false },
        with: {
          records: true,
          category: true,
          seller: { columns: { password: false } },
        },
        where: eq(product.productId, productRes.productId),
      });

      return res!;
    });

    return res;
  }

  async find() {
    const res = await this.conn.query.product.findMany({
      columns: { categoryId: false, userId: false },
      with: {
        records: true,
        category: true,
        seller: { columns: { password: false } },
      },
    });
    return res;
  }

  async findOne(id: number) {
    const res = await this.conn.query.product.findFirst({
      columns: { categoryId: false, userId: false },
      with: {
        records: true,
        category: true,
        seller: { columns: { password: false } },
      },
      where: eq(product.productId, id),
    });

    console.log(res);
    return res;
  }

  async update(id: number, body: UpdateProductDto) {
    console.log('e04su3su;6', body);

    const abv = await this.conn
      .update(product)
      .set(body)
      .where(eq(product.productId, id))
      .returning();
    console.log(1234);

    const res = await this.conn.query.product.findFirst({
      columns: { categoryId: false, userId: false },
      with: {
        records: true,
        category: true,
        seller: { columns: { password: false } },
      },
      where: eq(product.productId, id),
    });

    console.log(id);
    console.log(body);

    if (!res) {
      throw new NotFoundException();
    }
    return res!;
  }

  delete(productId: number) {
    return this.conn.delete(product).where(eq(product.productId, productId));
  }
  // findProductsByCategory(categoryId: number) {
  // }
  // return this.conn.select().from(product).where({ categoryId });

  // findProductsByUser(userId: number) {
  // }
  // return this.conn.select().from(product).where({ userId });
  // Util
}
function generateSN() {
  const trackNumber =
    new Date().toISOString() + Math.floor(Math.random() * 1000).toString();
  const regex = /\d+/g;
  const processed = trackNumber
    .split('')
    .filter((x) => x.match(regex))
    .join('');
  return processed;
}
