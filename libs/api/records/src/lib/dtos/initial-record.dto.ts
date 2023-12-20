import { IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';

export class InitialRecordDto {
  @IsNotEmpty()
  unitOfMeasure!: string;

  @IsPositive()
  unitPrice!: number;
}
