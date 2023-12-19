import { category } from '@vg/api-database';
export class UpdateProductDto {
  name?: string;
  categoryId?: number;
  // seller
  price?: number;
  records?: string[];
}
