import { Inject, Injectable } from '@nestjs/common';
import { Database, PG_CONNECTION, category } from '@vg/api-database';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { Category } from '../entities/select-category.entity';

@Injectable()
export class CategoriesService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const res = await this.conn
      .insert(category)
      .values(createCategoryDto)
      .returning();

    return new Category(res[0]);
  }

  find(): Promise<Category[]> {
    return this.conn.select().from(category);
  }

  // findOne() {}

  // update() {}

  // delete() {}
}
