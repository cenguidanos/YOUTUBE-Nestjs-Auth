import { Controller, Post, Res, Body, HttpStatus, Get, UseGuards } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductDTO } from './products.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('/almacen')
  private async createProduct(@Res() res: any, @Body() DTO: ProductDTO) {
    const product = await this.productService.createProducts(DTO);
    return res.status(HttpStatus.OK).json(product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/almacen')
  private async getProducts(@Res() res: any) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }
}
