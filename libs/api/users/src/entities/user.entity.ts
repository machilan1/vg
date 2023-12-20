import { ApiProperty } from '@nestjs/swagger';
import { SelectUser } from '@vg/api-database';

export class User {
  userId!: number;

  name!: string;

  email!: string;

  address!: string;

  phone!: string;

  taxId!: string;

  isAdmin!: boolean;

  createdAt!: Date;

  constructor(data: User) {
    Object.assign(this, data);
  }
}
