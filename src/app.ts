import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import products from '../products.json';
import bodyParser from 'body-parser';
import apiRouter from './api/routes';

const cart: any[] = [];

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.post('/api/cart', (req: Request, res: Response, next: NextFunction) => {
    const { productId, quantity } = req.body;

    const product = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).send();
        return;
    }

    const toAdd: any = {
        product: productId,
        quantity
    };
    cart.push(toAdd);

    res.status(201);
    res.json({
        ...toAdd,
        product
    });
});

app.get('/api/cart', (req: Request, res: Response, next: NextFunction) => {
    const results = cart.map(c => {
        const product = products.find(p => p.id === c.product);

        return {
            ...c,
            product
        }
    }) 
    res.json(results);
});

export default app;