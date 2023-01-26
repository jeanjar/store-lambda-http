import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.productsDelete`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'products/{id}',
      },
    },
  ],
};
