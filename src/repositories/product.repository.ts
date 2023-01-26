import { FilterQuery, HydratedDocument } from 'mongoose';
import { ProductModel } from '../schemas/product.schema';
import CreateProductDTO from '@functions/products.store/dto';

export class ProductRepository<Schema> {

  async all(filter: FilterQuery<Schema> = {}) {
    return ProductModel.find(filter).exec();
  }

  async create(data: CreateProductDTO): Promise<HydratedDocument<Schema>> {
    return ProductModel.create(data);
  }

  async findById(id: string): Promise<HydratedDocument<Schema>> {
    return ProductModel.findById(id).exec();
  }

  async delete(id: string): Promise<HydratedDocument<Schema>> {
    return ProductModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, data: CreateProductDTO): Promise<HydratedDocument<Schema>> {
    return ProductModel.findByIdAndUpdate(id, data, {new: true}).exec();
  }
}