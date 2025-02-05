import { Product } from "./product.entity";
import productsImport from '../../../products.json';
import { QueryProductsDTO } from "./product.dto";
const products: Product[] = productsImport;

export type ProductQuery = QueryProductsDTO;

export async function find(query: Partial<ProductQuery>): Promise<Product[]> {
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