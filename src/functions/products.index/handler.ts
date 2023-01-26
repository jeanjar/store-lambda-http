import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { ProductsService } from '../../services/products.service';

const productService = new ProductsService();


const products = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();
  const products = await productService.all();

  return formatJSONResponse(products);
};

export const productsIndex = middyfy(products);
