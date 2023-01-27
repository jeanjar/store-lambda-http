import { ProductRepository } from '../repositories/product.repository';
import CreateProductDTO from '@functions/products.store/dto';
import { ProductDocument } from '../schemas/product.schema';

export class ProductsService {
  private readonly repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository;
  }

  async all(): Promise<Array<ProductDocument>> {
    return this.repository.all();
  }

  async create(data: CreateProductDTO): Promise<ProductDocument> {
    return this.repository.create(data);
  }

  async findById(id: string): Promise<ProductDocument | null> {
    return this.repository.findById(id);
  }

  async delete(id: string): Promise<ProductDocument | null> {
    return this.repository.delete(id);
  }

  async update(id: string, data: CreateProductDTO): Promise<ProductDocument | null> {
    return this.repository.update(id, data);
  }
}
