import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@vg/shared-constants';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @MinLength(MIN_PASSWORD_LENGTH)
  @MaxLength(MAX_PASSWORD_LENGTH)
  password!: string;
}
