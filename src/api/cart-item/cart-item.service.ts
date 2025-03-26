import { CartItem } from "./cart-item.entity";
import { CartItemModel } from "./cart-item.model";

export async function addToCart(data: CartItem): Promise<CartItem> {
    const existing = await CartItemModel.findOne({product: data.product});
    if (!!existing) {
        existing.quantity += data.quantity;
        await existing.save();
        return existing.populate('product');
    }
    const newItem = await CartItemModel.create(data);
    await newItem.populate('product');
    return newItem;
}


export async function getCart(): Promise<CartItem[]> {
    return CartItemModel.find().populate('product');
}

export async function updateQuantity(id: string, quantity: number): Promise<CartItem | null> {
    const item = await CartItemModel.findById(id);
    if (!item) {
        return null;
    }
    item.quantity = quantity;
    await item.save();
    return item;
}


export async function update(id: string, data: Partial<CartItem>): Promise<CartItem | null> {
    const updated = await CartItemModel.findByIdAndUpdate(id, data, {new: true}).populate('product');

    return updated;
}

export async function removeFromCart(id: string): Promise<CartItem | null> {
    return CartItemModel.findByIdAndDelete(id);
}