import { IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';

export class InitialRecordDto {
  @IsNotEmpty()
  unitOfMeasure!: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  unitPrice!: number;
}
