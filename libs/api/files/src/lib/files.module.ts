import { Global, Module } from '@nestjs/common';
import { FileController } from './files.controller';

@Global()
@Module({
  controllers: [FileController],
  providers: [],
  imports: [],
  exports: [],
})
export class FilesModule {}
