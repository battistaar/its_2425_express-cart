import { Schema, model } from 'mongoose';
import { Product } from './product.entity';

const productSchema = new Schema<Product>({
    name: { type: String },
    description: String, 
    netPrice: Number,
    weight: Number,
    discount: Number
});

export const ProductModel = model<Product>('Product', productSchema);
