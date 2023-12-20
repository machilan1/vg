import { ApiProperty } from '@nestjs/swagger';
import { SelectUser } from '@vg/api-database';

export class User {
  @ApiProperty({ type: Number })
  userId!: number;

  @ApiProperty({ type: String })
  name!: string;

  @ApiProperty({ type: String })
  email!: string;

  @ApiProperty({ type: String })
  address!: string;

  @ApiProperty({ type: String })
  phone!: string;

  @ApiProperty({ type: String })
  taxId!: string;

  @ApiProperty({ type: Boolean, nullable: true })
  isAdmin!: boolean | null;

  @ApiProperty({ type: Date })
  createdAt!: Date;

  constructor(data: User) {
    Object.assign(this, data);
  }
}
