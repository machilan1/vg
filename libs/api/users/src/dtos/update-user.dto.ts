import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  TAX_ID_LENGTH,
  MIN_PHONE_NUMBER_LENGTH,
} from '@vg/shared-constants';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(MIN_USERNAME_LENGTH)
  @MaxLength(MAX_USERNAME_LENGTH)
  name?: string | null;

  @IsOptional()
  @IsString()
  address?: string | null;

  @IsOptional()
  @IsString()
  @MinLength(MIN_PHONE_NUMBER_LENGTH)
  phone?: string | null;

  @IsOptional()
  @IsString()
  @MinLength(TAX_ID_LENGTH)
  @MaxLength(TAX_ID_LENGTH)
  taxId?: string | null;
}
