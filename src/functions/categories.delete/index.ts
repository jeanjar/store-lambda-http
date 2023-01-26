import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.categoriesDelete`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'categories/{id}',
      },
    },
  ],
};
