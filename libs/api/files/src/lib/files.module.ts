import { Module } from '@nestjs/common';
import { FileController } from './files.controller';

@Module({
  controllers: [FileController],
  providers: [],
  imports: [],
  exports: [],
})
export class FilesModule {}
