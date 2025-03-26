import { genericHandler } from "./generic";
import { notFoundHandler } from "./not-found.error";

export const errorHandlers = [notFoundHandler, genericHandler];