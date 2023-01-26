import { FilterQuery, HydratedDocument } from 'mongoose';
import { CategoryModel } from '../schemas/category.schema';
import CreateCategoryDTO from '@functions/categories.store/dto';

export class CategoryRepository<Schema> {

  async all(filter: FilterQuery<Schema> = {}) {
    return CategoryModel.find(filter).exec();
  }

  async create(data: CreateCategoryDTO): Promise<HydratedDocument<Schema>> {
    return CategoryModel.create(data);
  }

  async findById(id: string): Promise<HydratedDocument<Schema>> {
    return CategoryModel.findById(id).exec();
  }

  async delete(id: string): Promise<HydratedDocument<Schema>> {
    return CategoryModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, data: CreateCategoryDTO): Promise<HydratedDocument<Schema>> {
    return CategoryModel.findByIdAndUpdate(id, data, {new: true}).exec();
  }
}