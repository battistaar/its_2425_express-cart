import { Product } from "./product.entity";
//import productsImport from '../../../products.json';
import { QueryProductsDTO } from "./product.dto";
//const products: Product[] = productsImport;
import { ProductModel } from "./product.model";

export type ProductQuery = QueryProductsDTO;

export async function find(query: Partial<ProductQuery>): Promise<Product[]> {
    const products = await ProductModel.find();
    return products;
    // return products.filter(p => {
    //     let match = true;
    //     if (query.name) {
    //         match = p.name.toLowerCase().includes(query.name.toLowerCase());
    //     }

    //     if (query.minPrice) {
    //         match = match && p.netPrice >= query.minPrice;
    //     }

    //     return match;
    // });
}

export async function getById(id: string): Promise<Product | null> {
    return ProductModel.findById(id);
}