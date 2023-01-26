import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import connectDatabase from '../../libs/mongodb';
import CreateProductDTO from '@functions/products.store/dto';
import { ProductsService } from '../../services/products.service';

const productsService = new ProductsService();

const products = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDatabase();

  const data = <CreateProductDTO>event.body;
  const newProduct = await productsService.create(data);

  return formatJSONResponse(newProduct);
};

export const productsStore = middyfy(products);
