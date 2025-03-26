import { IsInt, Min } from "class-validator";

export class AddCartItemDTO {
    productId: string;
    quantity: number;
}

export class UpdateCartQuantityDTO {
    @IsInt()
    @Min(1)
    quantity: number;
}