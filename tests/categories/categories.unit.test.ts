import { connectMemoryDatabase, disconnectMemoryDatabase } from '../utils/mongodb.memory';
import { CategoriesService } from '../../src/services/categories.service';
import CreateCategoryDTO from '@functions/categories.store/dto';

const categoriesService = new CategoriesService();

describe('Unity test for categories', () => {


  beforeAll(async () => await connectMemoryDatabase());
  afterAll(async () => await disconnectMemoryDatabase());

  const data: CreateCategoryDTO = {
    name: 'Category',
    description: 'Description',
    image: 'somebase64',
  };

  test('Category service should be defined', async () => {
    expect(categoriesService).toBeDefined();
  });

  test('Check total of categories', async () => {
    await Promise.all([
      categoriesService.create(data),
      categoriesService.create(data),
    ]);
    const allCategories = await categoriesService.all();
    expect(2).toEqual(allCategories.length);
  });

  test('Check if properties has same value', async () => {
    const createdCategory = await categoriesService.create(data);
    expect(createdCategory.name).toEqual(data.name);
    expect(createdCategory.description).toEqual(data.description);
    expect(createdCategory.image).toEqual(data.image);
  });

  test('Update category, check if values are changed', async () => {
    const createdCategory = await categoriesService.create(data);
    const newData: CreateCategoryDTO = {
      name: 'Category New',
      description: 'Description New',
      image: 'somebase64new',
    };

    const updatedCategory = await categoriesService.update(createdCategory._id.toString(), newData);
    expect(updatedCategory?.name).toEqual(newData.name);
    expect(updatedCategory?.description).toEqual(newData.description);
    expect(updatedCategory?.image).toEqual(newData.image);
  });

  test('Delete category', async () => {
    const categories = await categoriesService.all();
    const first = categories[0];
    await categoriesService.delete(first._id.toString());
    const deleted = await categoriesService.findById(first._id.toString());
    expect(deleted).toBeNull()
  });
})