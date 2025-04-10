import { model, Schema } from "mongoose";
import { CartItem } from "./cart-item.entity";

const cartItemSchema = new Schema<CartItem>({
    quantity: Number,
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, ref: 'User' } 
});

cartItemSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        delete ret.user;
        return ret;
    }
});

export const CartItemModel = model<CartItem>('CartItem', cartItemSchema);