export class Record {
  recordId!: number;

  productId!: number;
  // Todo make sure every data comes in certain sorting rule
  createdAt!: Date;

  unitPrice!: number;

  unitOfMeasure!: string;

  trackNumber!: string;

  constructor(data: Record) {
    Object.assign(this, data);
  }
}
