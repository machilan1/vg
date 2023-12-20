/* tslint:disable */
/* eslint-disable */
import { InitialRecordDto } from '../models/initial-record-dto';
export interface CreateProductDto {
  categoryId: number;
  image: string;
  name: string;
  records?: Array<InitialRecordDto>;
  userId: number;
}
