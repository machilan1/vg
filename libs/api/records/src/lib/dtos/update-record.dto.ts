import { IsOptional, IsPositive } from 'class-validator';

export class UpdateRecordDto {
  @IsPositive()
  @IsOptional()
  unitPrice?: number;

  @IsOptional()
  unitOfMeasure?: string;
}
