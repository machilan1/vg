import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateRecordDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  productId!: number;

  @IsNotEmpty()
  @IsString()
  unitOfMeasure!: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  unitPrice!: number;
}
