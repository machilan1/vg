/* tslint:disable */
/* eslint-disable */
import { Category } from '../models/category';
import { Record } from '../models/record';
import { User } from '../models/user';
export interface Product {
  category: Category;
  createdAt: string;
  name: string;
  productId: number;
  records: Array<Record>;
  seller: User;
}
