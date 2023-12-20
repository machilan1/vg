import { SelectCategory } from '@vg/api-database';

export class Category implements SelectCategory {
  categoryId!: number;
  name!: string;
  createdAt!: Date;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
