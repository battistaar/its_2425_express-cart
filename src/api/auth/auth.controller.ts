import { NextFunction, Request, Response } from "express";
import { TypedRequest } from "../../lib/typed-request.interface";
import { AddUserDTO } from "./auth.dto";
import userSrv, { UserExistsError } from "../user/user.service";
import { omit, pick } from "lodash";
import passport from "passport";
import jwt from 'jsonwebtoken';

export const add = async (
    req: TypedRequest<AddUserDTO>,
    res: Response,
    next: NextFunction
) => {
    try {
        const userData = omit(req.body, 'username', 'password');
        const credentialsData = pick(req.body, 'username', 'password');
        const newUser = await userSrv.add(userData, credentialsData);
        res.json(newUser);
    } catch(err) {
        if (err instanceof UserExistsError) {
            res.status(400);
            res.json({
                error: err.name,
                message: err.message
            })
        } else {
            next(err);
        }
    }
}

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    passport.authenticate('local', { session: false },
        (err, user, info) => {
            if(err) {
                next(err);
                return;
            }

            if (!user) {
                res.status(401);
                res.json({
                    error: 'LoginError',
                    message: info.message
                });
                return;
            }
            const token = jwt.sign(user, 'my_jwt_secret', { expiresIn: '7 days' });
            res.status(200);
            res.json({
                user,
                token
            });
        }
    )(req, res, next);
}