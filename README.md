# Local development

[Serverless](https://www.serverless.com/)

## First run

define AWS credentials

```shell
serverless credentials
```

# Deploying

```shell
serverless deploy
```

# Tests

```shell
yarn test
```

# Endpoints

### Categories

- GET: `categories` # Categories list
- POST: `categories` # Create new Category
    - { name, description, image }
- PATCH: `categories/{id}` # Create new Category
    - { name, description, image }
- GET `categories/{id}` # get details from category by ID
- DEL `categories/{id}` # delete category by ID

### Products

- GET: `products` # Products list
- POST: `products` # Create new Product
    - { name, description, image, price, category }
- PATCH: `products/{id}` # Create new Category
    - { name, description, image, price, category }
- GET `products/{id}` # get details from product by ID *WIP*
- DEL `products/{id}` # delete product by ID *WIP*