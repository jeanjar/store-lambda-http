import { handlerPath } from '@libs/handler-resolver';
import schema from '@functions/products.store/schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.productsStore`,
  events: [
    {
      http: {
        method: 'post',
        path: 'products',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
