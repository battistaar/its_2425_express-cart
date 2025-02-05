import { getById } from "../product/product.service";
import { CartItem, PopulatedCartItem } from "./cart-item.entity";

const cart: CartItem[] = [];

export async function addToCart(data: CartItem): Promise<CartItem> {
    cart.push(data);
    return data;
}

export async function getCart(): Promise<CartItem[]> {
    return cart;
}

export async function populateCartItem(source: CartItem): Promise<PopulatedCartItem>;
export async function populateCartItem(source: CartItem[]): Promise<PopulatedCartItem[]>;
export async function populateCartItem(source: CartItem | CartItem[]) {
    if (Array.isArray(source)) {
        const promises = source.map(c => populateCartItem(c));
        return Promise.all(promises);
    }

    const productId = source.product;
    const product = await getById(productId);
    return {
        ...source,
        product
    };
}