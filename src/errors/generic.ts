import { Request, Response, NextFunction } from "express";

export const genericHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({
        name: err.name,
        message: err.message
    });
}