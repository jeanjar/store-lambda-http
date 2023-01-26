import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { CategoriesService } from '../../services/categories.service';

const categoryService = new CategoriesService();


const categories = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();

  const id = event.pathParameters.id;
  const categories = await categoryService.findById(id);

  return formatJSONResponse(categories);
};

export const categoriesShow = middyfy(categories);
