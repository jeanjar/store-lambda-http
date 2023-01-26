import type { AWS } from '@serverless/typescript';

import {
  categoriesDelete,
  categoriesIndex,
  categoriesShow,
  categoriesStore,
  categoriesUpdate
} from '@functions/categories';
import { productsDelete, productsIndex, productsShow, productsStore, productsUpdate } from '@functions/products';

const functions = {
  categoriesIndex,
  categoriesStore,
  categoriesShow,
  categoriesUpdate,
  categoriesDelete,
  productsIndex,
  productsStore,
  productsShow,
  productsUpdate,
  productsDelete
};

const serverlessConfiguration: AWS = {
  service: 'store',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions,
  package: {individually: true},
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: {'require.resolve': undefined},
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
