import { Module } from '@nestjs/common';
import { FileController } from './files.controller';
import { GuardsModule } from '@vg/api-guards';

@Module({
  controllers: [FileController],
  providers: [],
  imports: [GuardsModule],
  exports: [],
})
export class FilesModule {}
