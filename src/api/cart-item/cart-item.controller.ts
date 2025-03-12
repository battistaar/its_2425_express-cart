import { Request, Response, NextFunction } from 'express';
import { getById } from '../product/product.service';
import { CartItem } from './cart-item.entity';
import { addToCart, getCart, update } from './cart-item.service';
import { TypedRequest } from '../../lib/typed-request.interface';
import { AddCartItemDTO, UpdateCartQuantityDTO } from './cart-item.dto';

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

export const updateQuantity = async (
    req: TypedRequest<UpdateCartQuantityDTO>,
    res: Response,
    next: NextFunction) => {

    const { id } = req.params;
    const { quantity } = req.body;

    const updated = await update(id, { quantity });
    if (!updated) {
        res.status(404).send();
        return;
    }
    res.json(updated);
}
