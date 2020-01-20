import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongoModule } from './database/mongo.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ApiModule, MongoModule, AuthModule],
  controllers: [AuthController],
})
export class AppModule { }
