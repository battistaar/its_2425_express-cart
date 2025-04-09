import { NextFunction, Response } from "express";
import { TypedRequest } from "../../lib/typed-request.interface";
import { AddUserDTO } from "./auth.dto";
import userSrv, { UserExistsError } from "../user/user.service";
import { omit, pick } from "lodash";

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