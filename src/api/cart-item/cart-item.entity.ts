import { Product } from "../product/product.entity";

export type CartItem = {
    id?: string;
    product: string | Product;
    quantity: number;
}

export type PopulatedCartItem = Omit<CartItem, 'product'> & {
    product: Product | null;
}