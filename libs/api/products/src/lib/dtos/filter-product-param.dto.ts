import { Transform } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class FilterProductParams {
  @IsOptional()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  categoryId?: number;
}
