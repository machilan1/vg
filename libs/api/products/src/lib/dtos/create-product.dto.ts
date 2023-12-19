import { CreateRecordDto } from '@vg/api-records';

export class CreateProductDto {
  userId!: number;
  name!: string;
  image!: string;
  categoryId!: number;
  records: Pick<CreateRecordDto, 'unitOfMeasure' | 'unitPrice'>[] = [];
}
