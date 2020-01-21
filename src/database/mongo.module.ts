import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: 'auth',
      useFactory: () => ({
        uri: 'Dirección de MONGO#1',
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
    }),
    MongooseModule.forRootAsync({
      connectionName: 'products',
      useFactory: () => ({
        uri: 'Dirección de MONGO#2',
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
    }),
  ],
})
export class MongoModule { }
