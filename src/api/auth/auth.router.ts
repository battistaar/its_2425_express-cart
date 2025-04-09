import { Router } from "express";
import { validate } from "../../lib/validation-middleware";
import { AddUserDTO } from "./auth.dto";
import { add } from "./auth.controller";

const router = Router();

router.post('/register', validate(AddUserDTO), add);

export default router;