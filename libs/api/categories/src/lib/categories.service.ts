import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Database, PG_CONNECTION, category } from '@vg/api-database';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { Category } from '../entities/select-category.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class CategoriesService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const [res] = await this.conn
      .insert(category)
      .values(createCategoryDto)
      .returning({
        categoryId: category.categoryId,
        name: category.name,
        createdAt: category.createdAt,
      });

    if (!res) {
      throw new NotFoundException();
    }

    return res;
  }

  async findMany(): Promise<Category[]> {
    const res = await this.conn.select().from(category);
    return res;
  }

  // async findOne(categoryId: number) {
  //   const [res] = await this.conn
  //     .select()
  //     .from(category)
  //     .where(eq(category.categoryId, categoryId));

  //   if (!res) {
  //     throw new NotFoundException();
  //   }

  //   return new Category(res);
  // }
}
