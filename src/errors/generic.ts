import { Request, Response, NextFunction } from "express";

export const genericHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
}