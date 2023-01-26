import { FilterQuery, HydratedDocument } from 'mongoose';
import { ProductModel } from '../schemas/product.schema';
import CreateCategoryDTO from '@functions/categories.store/dto';

export class ProductRepository<Schema> {

  async all(filter: FilterQuery<Schema> = {}) {
    return ProductModel.find(filter).exec();
  }

  async create(data: CreateCategoryDTO): Promise<HydratedDocument<Schema>> {
    return ProductModel.create(data);
  }

  async findById(id: string): Promise<HydratedDocument<Schema>> {
    return ProductModel.findById(id).exec();
  }

  async delete(id: string): Promise<HydratedDocument<Schema>> {
    return ProductModel.findByIdAndDelete(id).exec();
  }
}