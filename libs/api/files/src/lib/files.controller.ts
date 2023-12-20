import {
  UseInterceptors,
  Controller,
  Post,
  UploadedFile,
  BadRequestException,
  ParseFilePipeBuilder,
} from '@nestjs/common';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer, diskStorage } from 'multer';
import { FileSizeValidationPipe } from './pipes/file-validation.pipe';

import { join } from 'path';
import { UploadResponse } from './responses/upload.response';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { FileUploadDto } from './dtos/file-upload.dto';

@ApiTags('files')
@Controller('files')
export class FileController {
  @Post('upload')
  @ApiOperation({ operationId: 'uploadFile' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: join(__dirname, 'uploads'),
        filename: (req, file, cb) => {
          console.log(file.originalname);
          console.log(__dirname);
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'image' })
        .addMaxSizeValidator({ maxSize: 1000 * 1000 * 20 })
        .build(),
    )
    file: Express.Multer.File,
  ): Promise<UploadResponse> {
    if (file instanceof Error) {
      throw new BadRequestException();
    } else {
      console.log(file.path);
      return { path: file.path };
    }
  }
}
