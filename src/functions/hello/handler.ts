import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import connectDatabase from '../../libs/mongodb';
import { CategoriesService } from '../../services/categories.service';

const categoryService = new CategoriesService();


const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();
  const categories = await categoryService.all();

  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    categories,
    event,
  });
};

export const main = middyfy(hello);
