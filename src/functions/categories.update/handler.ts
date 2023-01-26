import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { CategoriesService } from '../../services/categories.service';
import CreateCategoryDTO from '@functions/categories.store/dto';

const categoryService = new CategoriesService();


const categories = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();

  const id = event.pathParameters.id;
  const data = <CreateCategoryDTO>event.body;
  const category = await categoryService.update(id, data);

  return formatJSONResponse(category);
};

export const categoriesUpdate = middyfy(categories);
