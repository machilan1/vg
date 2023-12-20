import { Module } from '@nestjs/common';
import { FileController } from './files.controller';
import { GuardsModule } from '@vg/api-guards';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [FileController],
  providers: [],
  imports: [GuardsModule, JwtModule],
  exports: [],
})
export class FilesModule {}
