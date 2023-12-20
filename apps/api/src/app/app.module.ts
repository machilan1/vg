import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vg/api-database';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoriesModule } from '@vg/api-categories';
import { AuthModule } from '@vg/api-auth';
import { UsersModule } from '@vg/api-users';
import { ProductsModule } from '@vg/api-products';
import { RecordsModule } from '@vg/api-records';
import { FilesModule } from '@vg/files';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    DatabaseModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
    ProductsModule,
    RecordsModule,
    FilesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'upload'),
    }),
    JwtModule.register({
      global: true,
      secret: process.env['JWT_SECRET'],
      // signOptions: { expiresIn: '12h' },
    }),
  ],
})
export class AppModule {}
