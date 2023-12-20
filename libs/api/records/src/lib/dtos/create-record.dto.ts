import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateRecordDto {
  @IsPositive()
  productId!: number;

  @IsNotEmpty()
  unitOfMeasure!: string;

  @IsPositive()
  unitPrice!: number;
}
