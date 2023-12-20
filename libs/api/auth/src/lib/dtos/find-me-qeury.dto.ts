import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class FindMeQueryParamDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsPositive()
  userId!: number;
}
