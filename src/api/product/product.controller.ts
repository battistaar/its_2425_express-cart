import { Request, Response, NextFunction} from 'express';
import { getById, find } from './product.service';
import { TypedRequest } from '../../lib/typed-request.interface';
import { QueryProductsDTO } from './product.dto';

export const list = async (
    req: TypedRequest<unknown, QueryProductsDTO>,
    res: Response,
    next: NextFunction) => {
    
    console.log(req.query)
    const filtered = await find(req.query);

    res.json(filtered);
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params['id'];

    const product = await getById(id);
    if (!product) {
        res.sendStatus(404);
        return;
    }
    console.log(product);
    console.log(product.id);

    res.json(product);
}