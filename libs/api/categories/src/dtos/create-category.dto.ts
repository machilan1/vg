import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import {
  MAX_CATEGORY_STR_LENGTH,
  MIN_CATEGORY_STR_LENGTH,
} from '@vg/shared-constants';

export class CreateCategoryDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Length(MIN_CATEGORY_STR_LENGTH, MAX_CATEGORY_STR_LENGTH)
  name!: string;
}
