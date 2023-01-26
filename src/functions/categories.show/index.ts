import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.categoriesShow`,
  events: [
    {
      http: {
        method: 'get',
        path: 'categories/{id}',
      },
    },
  ],
};
