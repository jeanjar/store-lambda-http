import { handlerPath } from '@libs/handler-resolver';
import schema from '@functions/categories.store/schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.categoriesStore`,
  events: [
    {
      http: {
        method: 'post',
        path: 'categories',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
