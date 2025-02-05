import { Request, Response, NextFunction} from 'express';
import { getById, list as listProducts } from './product.service';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    let name = req.query['name'] as string;
    let minPrice: number = req.query['minPrice'] ?
        parseFloat(req.query['minPrice'] as string)
        : 0;

    const filtered = await listProducts({name, minPrice});

    res.json(filtered);
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params['id'];

    const product = await getById(id);

    if (!product) {
        res.sendStatus(404);
        return;
    }

    res.json(product);
}