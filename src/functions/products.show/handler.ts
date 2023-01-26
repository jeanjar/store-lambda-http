import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { ProductsService } from '../../services/products.service';

const productsService = new ProductsService();


const products = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();

  const id = event.pathParameters.id;
  const product = await productsService.findById(id);

  return formatJSONResponse(product);
};

export const productsShow = middyfy(products);
