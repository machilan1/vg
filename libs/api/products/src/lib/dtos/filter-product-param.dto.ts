import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FilterProductParams {
  @ApiProperty({
    nullable: true,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  categoryId?: number;
}
