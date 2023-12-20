import { IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateRecordDto {
  @IsNumber()
  @IsPositive()
  unitPrice?: number;

  @IsString()
  unitOfMeasure?: string;
}
