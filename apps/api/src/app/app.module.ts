import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vg/api-database';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoriesModule } from '@vg/api-categories';
import { AuthModule } from '@vg/api-auth';
import { UsersModule } from '@vg/api-users';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    DatabaseModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'upload'),
    }),
  ],
})
export class AppModule {}
