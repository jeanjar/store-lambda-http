export default {
  type: "object",
  properties: {
    name: {type: 'string'},
    description: {type: 'string'},
    image: {type: 'string'},
    price: {type: 'string'},
    category: {type: 'string'},
  },
  required: ['name', 'description', 'price', 'category']
} as const;
