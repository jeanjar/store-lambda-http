import { Document, model, Schema } from 'mongoose';

export interface Product extends Document {
  name: string;
  image: string;
  description: string;
  price: string;
}

export const ProductSchema = new Schema<Product>({
  name: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'CategoryModel'}
}, {
  timestamps: true,
});

export const ProductModel = model('products', ProductSchema);
