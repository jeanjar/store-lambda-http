import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.productsStore`,
  events: [
    {
      http: {
        method: 'post',
        path: 'products',
      },
    },
  ],
};
