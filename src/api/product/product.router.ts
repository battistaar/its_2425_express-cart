import { Router } from "express";
import { get, list } from "./product.controller";

const router = Router();

router.get('/', list);
router.get('/:id', get);

export default router;