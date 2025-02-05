import { Product } from "./product.entity";
import productsImport from '../../../products.json';
const products: Product[] = productsImport;

export type ProductQuery = {
    name: string;
    minPrice: number;
}

export async function list(query: Partial<ProductQuery>): Promise<Product[]> {
    return products.filter(p => {
        let match = true;
        if (query.name) {
            match = p.name.toLowerCase().includes(query.name.toLowerCase());
        }

        if (query.minPrice) {
            match = match && p.netPrice >= query.minPrice;
        }

        return match;
    });
}

export async function getById(id: string): Promise<Product | null> {
    const product = products.find((p) => p.id === id);

    return !!product ? product : null;
}