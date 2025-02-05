import { Request, Response, NextFunction } from 'express';
import { getById } from '../product/product.service';
import { CartItem } from './cart-item.entity';
import { addToCart, getCart, populateCartItem } from './cart-item.service';

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const { productId, quantity } = req.body;

    const product = await getById(productId);
    if (!product) {
        res.status(404).send();
        return;
    }

    const toAdd: CartItem = {
        product: productId,
        quantity
    };
    
    const added = await addToCart(toAdd);
    const result = await populateCartItem(added);

    res.status(201);
    res.json(result);
}


export const list = async (req: Request, res: Response, next: NextFunction) => {
    const cart = await getCart();
    const results = await populateCartItem(cart);

    res.json(results);
}