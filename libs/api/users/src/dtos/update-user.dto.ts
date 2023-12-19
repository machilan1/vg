import { ApiProperty } from '@nestjs/swagger';
import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  TAX_ID_LENGTH,
} from '@vg/shared-constants';
import { IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ type: String, nullable: true })
  @IsString()
  @Length(MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH)
  name!: string;

  @ApiProperty({ type: String, nullable: true })
  @IsString()
  address!: string;

  @ApiProperty({ type: String, nullable: true })
  @IsString()
  phone!: string;

  @ApiProperty({ type: String, nullable: true })
  @IsString()
  @Length(TAX_ID_LENGTH, TAX_ID_LENGTH)
  taxId!: string;
}
