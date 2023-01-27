import { CategoryRepository } from '../repositories/category.repository';
import { CategoryDocument } from '../schemas/category.schema';
import CreateCategoryDTO from '@functions/categories.store/dto';

export class CategoriesService {
  private readonly repository: CategoryRepository;

  constructor() {
    this.repository = new CategoryRepository;
  }

  async all(): Promise<Array<CategoryDocument>> {
    return this.repository.all();
  }

  async create(data: CreateCategoryDTO): Promise<CategoryDocument> {
    return this.repository.create(data);
  }

  async findById(id: string): Promise<CategoryDocument | null> {
    return this.repository.findById(id);
  }

  async delete(id: string): Promise<CategoryDocument | null> {
    return this.repository.delete(id);
  }

  async update(id: string, data: CreateCategoryDTO): Promise<CategoryDocument | null> {
    return this.repository.update(id, data);
  }
}
