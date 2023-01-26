import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.productsUpdate`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'products/{id}',
      },
    },
  ],
};
