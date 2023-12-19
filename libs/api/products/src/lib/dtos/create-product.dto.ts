import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto {
  categoryId!: number;

  name!: string;

  // seller!: string;

  records!: string[];
}
