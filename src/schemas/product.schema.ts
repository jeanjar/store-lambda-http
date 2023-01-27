import { HydratedDocument, model, Schema } from 'mongoose';

export interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
  category: Schema.Types.ObjectId;
}

export const ProductSchema = new Schema<Product>({
  name: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category', required: true}
}, {
  timestamps: true,
});

export type ProductDocument = HydratedDocument<Product>;
export const ProductModel = model('products', ProductSchema);
