import {
  MAX_PRODUCT_NAME_LENGTH,
  MIN_PRODUCT_NAME_LENGTH,
} from '@vg/shared-constants';
import { IsOptional, IsPositive, MaxLength, MinLength } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsPositive()
  categoryId?: number;

  @IsOptional()
  @MinLength(MIN_PRODUCT_NAME_LENGTH)
  @MaxLength(MAX_PRODUCT_NAME_LENGTH)
  name?: string;

  @IsOptional()
  image?: string;
}
