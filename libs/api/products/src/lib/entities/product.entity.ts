import { Record } from '../../../../records/src/lib/entities/record.entity';
import { record } from '../../../../database/src/lib/schema';
import { ApiProperty } from '@nestjs/swagger';
import { SelectProduct } from '@vg/api-database';
import { User } from 'libs/api/users/src/entities/user.entity';

export class Product {
  productId!: number;

  categoryId!: number;

  name!: string;

  seller!: User;

  records!: Record[];

  createdAt!: Date;

  constructor(data: SelectProduct) {
    Object.assign(this, data);
  }
}
