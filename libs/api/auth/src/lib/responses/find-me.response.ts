import { ApiProperty } from '@nestjs/swagger';

export class FindMeResponse {
  userId!: number;

  name!: string;

  email!: string;

  address!: string;

  phone!: string;

  taxId!: string;

  isAdmin!: boolean;

  createdAt!: Date;

  constructor(data: FindMeResponse) {
    Object.assign(this, data);
  }
}
