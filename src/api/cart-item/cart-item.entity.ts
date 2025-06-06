import { Product } from "../product/product.entity";
import { User } from "../user/user.entity";

export type CartItem = {
    id?: string;
    product: string | Product;
    quantity: number;
    user: string | User;
}

export type PopulatedCartItem = Omit<CartItem, 'product'> & {
    product: Product | null;
}