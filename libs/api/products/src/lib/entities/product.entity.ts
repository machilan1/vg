import { Record } from '@vg/api-records';
import { User } from 'libs/api/users/src/entities/user.entity';
import { Category } from 'libs/api/categories/src/entities/select-category.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class Product {
  productId!: number;

  category!: Category;

  name!: string;

  image!: string;

  @ApiProperty({ type: [Record] })
  records!: Record[];

  latestPrice?: number;

  seller!: User;

  createdAt!: Date;

  constructor(data: Product) {
    Object.assign(this, data);

    if (this.records.length >= 1) {
      this.latestPrice = this.records[0].unitPrice;
    }
  }
}
