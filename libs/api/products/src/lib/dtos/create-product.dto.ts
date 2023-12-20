import { InitialRecordDto } from '@vg/api-records';
import {
  MAX_PRODUCT_NAME_LENGTH,
  MIN_PRODUCT_NAME_LENGTH,
} from '@vg/shared-constants';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateProductDto {
  @IsPositive()
  userId!: number;

  @MinLength(MIN_PRODUCT_NAME_LENGTH)
  @MaxLength(MAX_PRODUCT_NAME_LENGTH)
  name!: string;

  @IsNotEmpty()
  image!: string;

  @IsPositive()
  categoryId!: number;

  @IsArray()
  @Type(() => InitialRecordDto)
  @IsNotEmpty()
  @ValidateNested({ each: true })
  records?: InitialRecordDto[] = [];
}
