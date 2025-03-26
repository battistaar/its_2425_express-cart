import { Request, Response, NextFunction} from 'express';
import { getById, find } from './product.service';
import { TypedRequest } from '../../lib/typed-request.interface';
import { QueryProductsDTO } from './product.dto';
import { NotFoundError } from '../../errors/not-found.error';

export const list = async (
    req: TypedRequest<unknown, QueryProductsDTO>,
    res: Response,
    next: NextFunction) => {
    console.log(req.query);
    try {
        const filtered = await find(req.query);

        res.json(filtered);
    } catch(err) {
        next(err);
    }
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params['id'];

        const product = await getById(id);
        if (!product) {
            throw new NotFoundError();
        }
        console.log(product);
        console.log(product.id);

        res.json(product);
    } catch(err) {
        next(err);
    }
}