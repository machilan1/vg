import { ApiProperty } from '@nestjs/swagger';
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_PHONE_NUMBER_LENGTH,
  TAX_ID_LENGTH,
} from '@vg/shared-constants';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @MinLength(1)
  name!: string;

  @IsEmail()
  email!: string;

  @MinLength(MIN_PASSWORD_LENGTH)
  @MaxLength(MAX_PASSWORD_LENGTH)
  password!: string;

  @IsNotEmpty()
  address!: string;

  @MinLength(MIN_PHONE_NUMBER_LENGTH)
  phone!: string;

  @MinLength(TAX_ID_LENGTH)
  @MaxLength(TAX_ID_LENGTH)
  taxId!: string;
}
