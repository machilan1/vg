import { ApiProperty } from '@nestjs/swagger';
import { SelectCategory } from '@vg/api-database';

export class Category implements SelectCategory {
  @ApiProperty({ type: Number })
  categoryId!: number;

  @ApiProperty({ type: String })
  name!: string;

  @ApiProperty({ type: Date })
  createdAt!: Date;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
