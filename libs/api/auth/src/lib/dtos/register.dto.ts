import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ type: String })
  name!: string;
  @ApiProperty({ type: String })
  email!: string;
  @ApiProperty({ type: String })
  password!: string;
  @ApiProperty({ type: String })
  address!: string;
  @ApiProperty({ type: String })
  phone!: string;
  @ApiProperty({ type: String })
  taxId!: string;
}
