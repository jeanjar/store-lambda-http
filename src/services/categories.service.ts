import { CategoryRepository } from '../repositories/category.repository';
import { Category, CategorySchema } from '../schemas/category.schema';
import { HydratedDocument } from 'mongoose';
import CreateCategoryDTO from '@functions/categories.store/dto';

export class CategoriesService {
  private readonly repository: CategoryRepository<CategorySchema>;

  constructor() {
    this.repository = new CategoryRepository<CategorySchema>;
  }

  async all(): Promise<Array<HydratedDocument<Category>>> {
    return this.repository.all();
  }

  async create(data: CreateCategoryDTO): Promise<HydratedDocument<Category>> {
    return this.repository.create(data);
  }

  async findById(id: string): Promise<HydratedDocument<Category>> {
    return this.repository.findById(id);
  }

  async delete(id: string): Promise<HydratedDocument<Category>> {
    return this.repository.delete(id);
  }

  async update(id: string, data: CreateCategoryDTO): Promise<HydratedDocument<Category>> {
    return this.repository.update(id, data);
  }
}
