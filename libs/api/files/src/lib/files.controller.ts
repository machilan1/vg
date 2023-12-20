import {
  UseInterceptors,
  Controller,
  Post,
  UploadedFile,
  BadRequestException,
  ParseFilePipeBuilder,
  UseGuards,
} from '@nestjs/common';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { UploadResponse } from './responses/upload.response';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtGuard } from '@vg/api-guards';

@ApiTags('files')
@UseGuards(JwtGuard)
@Controller('files')
export class FileController {
  @Post('upload')
  @ApiBearerAuth()
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
      return new UploadResponse(file);
    }
  }
}
