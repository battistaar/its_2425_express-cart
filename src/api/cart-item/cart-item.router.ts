import { Router } from "express";
import { add, list, remove, updateQuantity } from "./cart-item.controller";
import { validate } from "../../lib/validation-middleware";
import { AddCartItemDTO, UpdateCartQuantityDTO } from "./cart-item.dto";

const router = Router();

router.post('/', validate(AddCartItemDTO), add);
router.patch('/:id', validate(UpdateCartQuantityDTO), updateQuantity);
router.get('/', list);
router.delete('/:id', remove);

export default router;