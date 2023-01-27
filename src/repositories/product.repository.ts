import { FilterQuery } from 'mongoose';
import { ProductDocument, ProductModel } from '../schemas/product.schema';
import CreateProductDTO from '@functions/products.store/dto';

export class ProductRepository {

  async all(filter: FilterQuery<ProductDocument> = {}) {
    return ProductModel.find(filter).exec();
  }

  async create(data: CreateProductDTO): Promise<ProductDocument> {
    return ProductModel.create(data);
  }

  async findById(id: string): Promise<ProductDocument | null> {
    return ProductModel.findById(id).exec();
  }

  async delete(id: string): Promise<ProductDocument | null> {
    return ProductModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, data: CreateProductDTO): Promise<ProductDocument | null> {
    return ProductModel.findByIdAndUpdate(id, data, {new: true}).exec();
  }
}