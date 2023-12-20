import { ApiHideProperty } from '@nestjs/swagger';

export class Record {
  recordId!: number;

  productId!: number;

  createdAt!: Date;

  unitPrice!: number;

  unitOfMeasure!: string;

  trackNumber!: string;

  constructor(data: Record) {
    Object.assign(this, data);
  }
}
