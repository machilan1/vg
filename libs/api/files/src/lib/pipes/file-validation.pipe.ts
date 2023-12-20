/* eslint-disable @typescript-eslint/no-explicit-any */
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const twentyMbs = 1000 * 1000 * 20;
    if (!value) {
      return new Error('File not provided');
    }

    return value.size < twentyMbs ? value : new Error('File size exceeds 20MB');
  }
}
