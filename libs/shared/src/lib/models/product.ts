/* tslint:disable */
/* eslint-disable */
import { Record } from '../models/record';
import { User } from '../models/user';
export interface Product {
  categoryId: number;
  createdAt: string;
  name: string;
  productId: number;
  records: Array<Record>;
  seller: User;
}
