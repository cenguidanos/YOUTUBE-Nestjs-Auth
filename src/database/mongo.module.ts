import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: 'auth',
      useFactory: () => ({
        uri: 'mongodb+srv://root:1234@cluster0-ecrci.mongodb.net/auth?retryWrites=true&w=majority',
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
    }),
    MongooseModule.forRootAsync({
      connectionName: 'products',
      useFactory: () => ({
        uri: 'mongodb+srv://root:1234@cluster0-ecrci.mongodb.net/products?retryWrites=true&w=majority',
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
    }),
  ],
})
export class MongoModule { }
