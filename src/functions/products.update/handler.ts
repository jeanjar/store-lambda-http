import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import { ProductsService } from '../../services/products.service';
import CreateProductDTO from '@functions/products.store/dto';

const productsService = new ProductsService();


const products = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();

  const id = event.pathParameters.id;
  const data = <CreateProductDTO>event.body;
  const product = await productsService.update(id, data);

  return formatJSONResponse(product);
};

export const productsUpdate = middyfy(products);
