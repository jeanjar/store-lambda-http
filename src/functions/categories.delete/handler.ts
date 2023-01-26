import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { CategoriesService } from '../../services/categories.service';

const categoryService = new CategoriesService();


const categories = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();

  const id = event.pathParameters.id;
  const deletedCategory = await categoryService.delete(id);

  return formatJSONResponse(deletedCategory);
};

export const categoriesDelete = middyfy(categories);
