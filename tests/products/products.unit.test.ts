import { connectMemoryDatabase, disconnectMemoryDatabase } from '../utils/mongodb.memory';
import { ProductsService } from '../../src/services/products.service';
import CreateProductDTO from '@functions/products.store/dto';
import mongoose from 'mongoose';

const productsService = new ProductsService();

describe('Unity test for products', () => {


  beforeAll(async () => await connectMemoryDatabase());

  const data: CreateProductDTO = {
    name: 'Category',
    description: 'Description',
    image: 'somebase64',
    price: '15.95',
    category: new mongoose.Types.ObjectId().toString(),
  };

  test('Category service should be defined', async () => {
    expect(productsService).toBeDefined();
  });

  test('Check total of products', async () => {
    await Promise.all([
      productsService.create(data),
      productsService.create(data),
    ]);
    const allCategories = await productsService.all();
    expect(2).toEqual(allCategories.length);
  });

  test('Check if properties has same value', async () => {
    const productCreated = await productsService.create(data);
    expect(productCreated.name).toEqual(data.name);
    expect(productCreated.description).toEqual(data.description);
    expect(productCreated.image).toEqual(data.image);
    expect(productCreated.category.toString()).toEqual(data.category);
  });

  test('Update product, check if values are changed', async () => {
    const createdCategory = await productsService.create(data);
    const newData: CreateProductDTO = {
      name: 'Category New',
      description: 'Description New',
      image: 'somebase64new',
      category: new mongoose.Types.ObjectId().toString(),
      price: '10.50'
    };

    const updatedProduct = await productsService.update(createdCategory._id.toString(), newData);
    expect(updatedProduct?.name).toEqual(newData.name);
    expect(updatedProduct?.description).toEqual(newData.description);
    expect(updatedProduct?.image).toEqual(newData.image);
    expect(updatedProduct?.price).toEqual(newData.price);
    expect(updatedProduct?.category.toString()).toEqual(newData.category);
  });

  test('Delete product', async () => {
    const products = await productsService.all();
    const first = products[0];
    await productsService.delete(first._id.toString());
    const deleted = await productsService.findById(first._id.toString());
    expect(deleted).toBeNull()
  });

  afterAll(async () => await disconnectMemoryDatabase());
});