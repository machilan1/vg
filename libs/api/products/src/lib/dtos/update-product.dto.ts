import { CreateRecordDto } from '@vg/api-records';
import {
  MAX_PRODUCT_NAME_LENGTH,
  MIN_PRODUCT_NAME_LENGTH,
} from '@vg/shared-constants';
import {
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateProductDto {
  @IsPositive()
  @IsNumber()
  categoryId?: number;

  @IsString()
  @MinLength(MIN_PRODUCT_NAME_LENGTH)
  @MaxLength(MAX_PRODUCT_NAME_LENGTH)
  name?: string;

  @IsString()
  image?: string;
}
