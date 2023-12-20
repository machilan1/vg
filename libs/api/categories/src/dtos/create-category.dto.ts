import { MaxLength, MinLength } from 'class-validator';
import {
  MAX_CATEGORY_NAME_LENGTH,
  MIN_CATEGORY_NAME_LENGTH,
} from '@vg/shared-constants';

export class CreateCategoryDto {
  @MinLength(MIN_CATEGORY_NAME_LENGTH)
  @MaxLength(MAX_CATEGORY_NAME_LENGTH)
  name!: string;
}
