import { FilterQuery } from 'mongoose';
import { CategoryDocument, CategoryModel } from '../schemas/category.schema';
import CreateCategoryDTO from '@functions/categories.store/dto';

export class CategoryRepository {

  async all(filter: FilterQuery<CategoryDocument> = {}): Promise<Array<CategoryDocument>> {
    return CategoryModel.find(filter).exec();
  }

  async create(data: CreateCategoryDTO): Promise<CategoryDocument> {
    return CategoryModel.create(data);
  }

  async findById(id: string): Promise<CategoryDocument | null> {
    return CategoryModel.findById(id).exec();
  }

  async delete(id: string): Promise<CategoryDocument | null> {
    return CategoryModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, data: CreateCategoryDTO): Promise<CategoryDocument | null> {
    return CategoryModel.findByIdAndUpdate(id, data, {new: true}).exec();
  }
}