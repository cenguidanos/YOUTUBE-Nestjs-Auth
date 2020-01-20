import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IProduct } from './products.interface';
import { ProductDTO } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Almacen') private readonly productsModel: Model<IProduct>) { }

  public async getProducts(): Promise<IProduct[]> {
    return await this.productsModel.find();
  }
  public async getProduct(id: string): Promise<IProduct> {
    return await this.productsModel.findById(id);
  }
  public async createProducts(DTO: ProductDTO): Promise<IProduct> {
    return await new this.productsModel(DTO).save();
  }
  public async updateQuestion(id: string, DTO: ProductDTO): Promise<IProduct> {
    return await this.productsModel.findByIdAndUpdate(id, DTO, { new: true });
  }
  public async deleteQuestion(id: string): Promise<IProduct> {
    return await this.productsModel.findByIdAndDelete(id);
  }
}
