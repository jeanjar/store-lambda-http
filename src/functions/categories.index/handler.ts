import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { CategoriesService } from '../../services/categories.service';

const categoryService = new CategoriesService();


const categories = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();
  const categories = await categoryService.all();

  return formatJSONResponse(categories);
};

export const categoriesIndex = middyfy(categories);
