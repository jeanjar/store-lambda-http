import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.categoriesUpdate`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'categories/{id}',
      },
    },
  ],
};
