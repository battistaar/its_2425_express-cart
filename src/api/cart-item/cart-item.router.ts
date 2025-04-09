import { Router } from "express";
import { add, list, remove, updateQuantity } from "./cart-item.controller";
import { validate } from "../../lib/validation-middleware";
import { AddCartItemDTO, UpdateCartQuantityDTO } from "./cart-item.dto";
import { isAuthenticated } from "../../lib/auth/auth.middleware";

const router = Router();

router.post('/', validate(AddCartItemDTO), add);
router.patch('/:id', validate(UpdateCartQuantityDTO), updateQuantity);
router.get('/', isAuthenticated, list);
router.delete('/:id', remove);

export default router;