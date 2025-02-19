import { CartItem } from "./cart-item.entity";
import { CartItemModel } from "./cart-item.model";

export async function addToCart(data: CartItem): Promise<CartItem> {
    const newItem = await CartItemModel.create(data);
    await newItem.populate('product');
    return newItem;
}

export async function getCart(): Promise<CartItem[]> {
    return CartItemModel.find().populate('product');
}
