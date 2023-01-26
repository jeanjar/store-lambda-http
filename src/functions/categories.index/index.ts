import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.categoriesIndex`,
  events: [
    {
      http: {
        method: 'get',
        path: 'categories',
      },
    },
  ],
};
