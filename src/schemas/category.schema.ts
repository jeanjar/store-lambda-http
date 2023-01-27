import { HydratedDocument, model, Schema } from 'mongoose';

export interface Category {
  name: string;
  image: string;
  description: string;
}

export const CategorySchema = new Schema<Category>({
  name: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
}, {
  timestamps: true,
});

export type CategoryDocument = HydratedDocument<Category>;
export const CategoryModel = model('categories', CategorySchema);