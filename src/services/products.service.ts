import { HydratedDocument } from 'mongoose';
import { ProductRepository } from '../repositories/product.repository';
import CreateProductDTO from '@functions/products.store/dto';
import { Product, ProductSchema } from '../schemas/product.schema';

export class ProductsService {
  private readonly repository: ProductRepository<ProductSchema>;

  constructor() {
    this.repository = new ProductRepository<ProductSchema>;
  }

  async all(): Promise<Array<HydratedDocument<Product>>> {
    return this.repository.all();
  }

  async create(data: CreateProductDTO): Promise<HydratedDocument<Product>> {
    return this.repository.create(data);
  }

  async findById(id: string): Promise<HydratedDocument<Product>> {
    return this.repository.findById(id);
  }

  async delete(id: string): Promise<HydratedDocument<Product>> {
    return this.repository.delete(id);
  }

  async update(id: string, data: CreateProductDTO): Promise<HydratedDocument<Product>> {
    return this.repository.update(id, data);
  }
}
