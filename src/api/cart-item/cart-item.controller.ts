import { Request, Response, NextFunction } from 'express';
import { getById } from '../product/product.service';
import { CartItem } from './cart-item.entity';
import { addToCart, getCart } from './cart-item.service';
import { TypedRequest } from '../../lib/typed-request.interface';
import { AddCartItemDTO } from './cart-item.dto';

export const add = async (
    req: TypedRequest<AddCartItemDTO>, 
    res: Response, 
    next: NextFunction) => {

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

    res.status(201);
    res.json(added);
}


export const list = async (req: Request, res: Response, next: NextFunction) => {
    const cart = await getCart();

    res.json(cart);
}
