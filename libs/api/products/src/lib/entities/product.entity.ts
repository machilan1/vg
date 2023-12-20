import { Record } from '../../../../records/src/lib/entities/record.entity';
import { SelectProduct } from '@vg/api-database';
import { User } from 'libs/api/users/src/entities/user.entity';
import { Category } from 'libs/api/categories/src/entities/select-category.entity';

export class Product {
  productId!: number;

  category!: Category;

  name!: string;

  image!: string;

  records!: Record[];

  latestPrice?: number;

  seller!: User;

  createdAt!: Date;

  constructor(data: Product) {
    Object.assign(this, data);

    if (this.records.length >= 1) {
      this.latestPrice = this.records[0].unitPrice;

      console.log(this.latestPrice);
    }
  }
}
