import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  TAX_ID_LENGTH,
  MIN_PHONE_NUMBER_LENGTH,
} from '@vg/shared-constants';
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @MinLength(MIN_USERNAME_LENGTH)
  @MaxLength(MAX_USERNAME_LENGTH)
  name?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  @MinLength(MIN_PHONE_NUMBER_LENGTH)
  phone?: string;

  @IsOptional()
  @MinLength(TAX_ID_LENGTH)
  @MaxLength(TAX_ID_LENGTH)
  taxId?: string;
}
