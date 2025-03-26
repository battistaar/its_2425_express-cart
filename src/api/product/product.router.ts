import { Router } from "express";
import { get, list } from "./product.controller";
import { validate } from "../../lib/validation-middleware";
import { QueryProductsDTO } from "./product.dto";

const router = Router();

router.get('/', validate(QueryProductsDTO, 'query'), list);
router.get('/:id', get);

export default router;